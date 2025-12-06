import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Start fade out after 2.5 seconds
        const timer1 = setTimeout(() => {
            setFade(true);
        }, 2500);

        // Remove from DOM after transition (3s total)
        const timer2 = setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative group">
                <img
                    src="/intro-logo.png"
                    alt="CAPSLOCK x STRANGER THINGS"
                    className="w-full max-w-2xl object-contain animate-pulse-slow pixelated rendering-pixelated"
                />

                {/* Glitch effects overlaid */}
                <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay animate-glitch-1 opacity-0 group-hover:opacity-100"></div>
            </div>

            <div className="mt-8 font-mono text-red-600 text-sm tracking-widest animate-blink">
                LOADING UPSIDE DOWN...
            </div>

            <style>{`
                .pixelated {
                    image-rendering: pixelated;
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); filter: brightness(1); }
                    50% { transform: scale(1.02); filter: brightness(1.2); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s infinite ease-in-out;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
            `}</style>
        </div>
    );
};

export default IntroAnimation;
