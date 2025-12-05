import React, { useEffect, useState } from 'react';

const UpsideDownParticles: React.FC = () => {
    const [particles, setParticles] = useState<number[]>([]);

    useEffect(() => {
        // Generate static particle IDs
        const count = 50;
        setParticles(Array.from({ length: count }, (_, i) => i));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            <style>{`
        .ash-particle {
          position: absolute;
          background: rgba(200, 200, 200, 0.6);
          border-radius: 50%;
          filter: blur(1px);
          animation: float linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(110vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
            {particles.map((i) => {
                const size = Math.random() * 4 + 1; // 1-5px
                const left = Math.random() * 100; // 0-100vw
                const duration = Math.random() * 10 + 5; // 5-15s
                const delay = Math.random() * 10; // 0-10s
                const opacity = Math.random() * 0.5 + 0.3;

                return (
                    <div
                        key={i}
                        className="ash-particle"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}vw`,
                            animationDuration: `${duration}s`,
                            animationDelay: `-${delay}s`, // Negative delay to start mid-animation
                            opacity: opacity,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default UpsideDownParticles;
