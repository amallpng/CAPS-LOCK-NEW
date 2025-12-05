import React, { useState, useEffect, useRef } from 'react';

interface PythonIDEProps {
    initialCode?: string;
    onOutputChange?: (output: string) => void;
    readOnly?: boolean;
}

declare global {
    interface Window {
        loadPyodide: any;
    }
}

const PythonIDE: React.FC<PythonIDEProps> = ({ initialCode = '', onOutputChange, readOnly = false }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const pyodideRef = useRef<any>(null);
    const outputRef = useRef('');

    useEffect(() => {
        setCode(initialCode);
        setOutput('');
        outputRef.current = '';
    }, [initialCode]);

    useEffect(() => {
        const loadPyodideAsync = async () => {
            if (pyodideRef.current) {
                setIsLoading(false);
                return;
            }

            try {
                if (!window.loadPyodide) {
                    const script = document.createElement('script');
                    script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
                    script.onload = async () => {
                        try {
                            pyodideRef.current = await window.loadPyodide();
                            setIsLoading(false);
                        } catch (e) {
                            console.error("Pyodide init failed", e);
                        }
                    };
                    document.body.appendChild(script);
                } else {
                    pyodideRef.current = await window.loadPyodide();
                    setIsLoading(false);
                }
            } catch (e) {
                console.error("Failed to load pyodide", e);
            }
        };
        loadPyodideAsync();
    }, []);

    const runCode = async () => {
        if (!pyodideRef.current) return;
        setIsRunning(true);
        outputRef.current = '';
        setOutput('');

        try {
            pyodideRef.current.setStdout({
                batched: (msg: string) => {
                    outputRef.current += msg + '\n';
                    setOutput(outputRef.current);
                }
            });

            await pyodideRef.current.runPythonAsync(code);

            if (onOutputChange) {
                onOutputChange(outputRef.current);
            }
        } catch (err: any) {
            const errorMsg = `Error: ${err.message}\n`;
            outputRef.current += errorMsg;
            setOutput(outputRef.current);
            if (onOutputChange) {
                onOutputChange(outputRef.current);
            }
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="relative">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-48 bg-gray-900 text-green-400 font-mono p-4 rounded-sm border-2 border-gray-700 focus:border-green-500 outline-none resize-y"
                    placeholder="Write your Python code here..."
                    readOnly={readOnly}
                    spellCheck={false}
                />
                <button
                    onClick={runCode}
                    disabled={isLoading || isRunning || readOnly}
                    className="absolute top-2 right-2 bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded-sm text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? 'Loading...' : isRunning ? 'Running...' : 'Run Code'}
                </button>
            </div>

            <div className="bg-black text-white p-4 rounded-sm font-mono text-sm min-h-[100px] whitespace-pre-wrap border-2 border-gray-800">
                <div className="text-gray-500 mb-1 border-b border-gray-800 pb-1 uppercase text-xs tracking-wider">Output</div>
                {output}
            </div>
        </div>
    );
};

export default PythonIDE;
