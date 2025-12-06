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
        let mounted = true;
        const loadPyodideAsync = async () => {
            if (pyodideRef.current) {
                if (mounted) setIsLoading(false);
                return;
            }

            try {
                if (!window.loadPyodide) {
                    const script = document.createElement('script');
                    script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
                    script.onload = async () => {
                        try {
                            const pyodide = await window.loadPyodide();
                            if (mounted) {
                                pyodideRef.current = pyodide;
                                setIsLoading(false);
                            }
                        } catch (e) {
                            console.error("Pyodide init failed", e);
                        }
                    };
                    document.body.appendChild(script);
                } else {
                    const pyodide = await window.loadPyodide();
                    if (mounted) {
                        pyodideRef.current = pyodide;
                        setIsLoading(false);
                    }
                }
            } catch (e) {
                console.error("Failed to load pyodide", e);
            }
        };
        loadPyodideAsync();
        return () => { mounted = false; };
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
        <div className="flex flex-col gap-2 w-full h-full">
            <div className="relative flex-grow min-h-[200px]">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-gray-900 text-green-400 font-mono p-4 rounded-sm border-2 border-gray-700 focus:border-green-500 outline-none resize-none text-sm md:text-base leading-tight"
                    placeholder="Write your Python code here..."
                    readOnly={readOnly}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
                <button
                    onClick={runCode}
                    disabled={isLoading || isRunning || readOnly}
                    className="absolute top-2 right-2 bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded-sm text-xs md:text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md z-10"
                >
                    {isLoading ? 'Loading Engine...' : isRunning ? 'Running...' : 'Run Code ▶'}
                </button>
            </div>

            <div className="bg-black text-white p-4 rounded-sm font-mono text-xs md:text-sm min-h-[100px] max-h-[200px] overflow-y-auto whitespace-pre-wrap border-2 border-gray-800 shadow-inner">
                <div className="text-gray-500 mb-1 border-b border-gray-800 pb-1 uppercase text-[10px] md:text-xs tracking-wider font-bold">Terminal Output</div>
                {output || <span className="text-gray-700 italic opacity-50">output will appear here...</span>}
            </div>
        </div>
    );
};

export default PythonIDE;
