import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence timing
        const timers: NodeJS.Timeout[] = [];

        // Step 1: Fade in letters (0s)
        timers.push(setTimeout(() => setStep(1), 100)); // Start immediately

        // Step 2: Zoom/Move together (3s)
        timers.push(setTimeout(() => setStep(2), 3000));

        // Step 3: Final Lockup & Glow (4s)
        timers.push(setTimeout(() => setStep(3), 4000));

        // Step 4: Fade Out (6.5s)
        timers.push(setTimeout(() => setStep(4), 6500));

        // Complete (7.5s)
        timers.push(setTimeout(() => onComplete(), 7500));

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    if (step === 4 && typeof document !== 'undefined') {
        // Optional: Cleanup logic if needed before unmounting
    }

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${step >= 4 ? 'opacity-0' : 'opacity-100'}`}>

            {/* Film Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-10 animate-grain"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_60%,black_100%)] z-20"></div>

            {/* Container for the Title */}
            <div className={`relative z-30 flex flex-col items-center transform transition-transform duration-[4000ms] ease-out ${step >= 2 ? 'scale-100' : 'scale-[1.15]'}`}>

                {/* Top Line "CAPS LOCK" */}
                {/* Individual Letter Animations to simulate them drifting together */}
                <div className="flex gap-2 mb-4">
                    {"CAPS LOCK".split('').map((char, i) => (
                        <span key={i}
                            className={`
                                 font-serif text-5xl md:text-8xl font-black text-transparent
                                 bg-clip-text bg-gradient-to-b from-[#e60000] to-[#800000]
                                 stroke-text
                                 transform transition-all duration-[3000ms] ease-in-out
                                 ${step >= 1 ? 'opacity-100 translate-x-0' : `opacity-0 ${i % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`}
                                 ${step >= 3 ? 'drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]' : 'drop-shadow-[0_0_5px_rgba(150,0,0,0.5)]'}
                               `}
                            style={{
                                fontFamily: '"Benguiat", "Times New Roman", serif',
                                WebkitTextStroke: '2px #c00',
                                letterSpacing: step >= 2 ? 'normal' : '0.5em'
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </div>

                <div className={`flex items-center gap-4 transition-opacity duration-1000 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-[2px] w-12 md:w-24 bg-red-600 shadow-[0_0_8px_red]"></div>
                    <span className="font-serif text-red-600 text-xl font-bold tracking-[0.2em] animate-pulse">
                        X
                    </span>
                    <div className="h-[2px] w-12 md:w-24 bg-red-600 shadow-[0_0_8px_red]"></div>
                </div>

                {/* Bottom Line "STRANGER THINGS" */}
                <div className="mt-2 text-center">
                    <h1 className={`
                        font-serif text-3xl md:text-6xl text-transparent bg-clip-text bg-red-700
                        transform transition-all duration-[3000ms]
                        ${step >= 1 ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                        ${step >= 3 ? 'drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]' : ''}
                    `}
                        style={{
                            fontFamily: '"Benguiat", "Times New Roman", serif',
                            WebkitTextStroke: '1px #a00',
                            letterSpacing: '0.1em'
                        }}
                    >
                        STRANGER THINGS
                    </h1>
                </div>

            </div>

            <style>{`
                @keyframes grain {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -5%); }
                    20% { transform: translate(-10%, 5%); }
                    30% { transform: translate(5%, -10%); }
                    40% { transform: translate(-5%, 15%); }
                    50% { transform: translate(-10%, 5%); }
                    60% { transform: translate(15%, 0); }
                    70% { transform: translate(0, 10%); }
                    80% { transform: translate(-15%, 0); }
                    90% { transform: translate(10%, 5%); }
                }
                .animate-grain {
                    animation: grain 8s steps(10) infinite;
                }
                
                /* Compatibility for text stroke if standard method fails */
                .stroke-text {
                    -webkit-text-stroke: 1px #d00;
                }
            `}</style>
        </div>
    );
};

export default IntroAnimation;
