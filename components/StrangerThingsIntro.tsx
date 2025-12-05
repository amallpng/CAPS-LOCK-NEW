import React, { useEffect, useState } from 'react';

const StrangerThingsIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 4000); // 4 seconds intro
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Benguiat:wght@700&display=swap');
        
        .st-container {
          position: relative;
          perspective: 1000px;
          transform-style: preserve-3d;
          animation: pivot 4s ease-out forwards;
        }

        .st-title {
          font-family: 'Benguiat', serif;
          font-size: 8rem;
          color: transparent;
          text-transform: uppercase;
          letter-spacing: -0.5rem;
          -webkit-text-stroke: 2px #C12C1F;
          text-shadow: 0 0 30px rgba(193, 44, 31, 0.5);
          transform: rotateX(20deg); 
          animation: 
            zoomIn 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
            glow 2s ease-in-out infinite alternate;
        }

        @keyframes pivot {
            0% { transform: rotateY(15deg) rotateX(10deg); }
            100% { transform: rotateY(0deg) rotateX(0deg); }
        }

        @keyframes zoomIn {
          0% { transform: scale(20) translateZ(1000px); opacity: 0; }
          100% { transform: scale(1) translateZ(0); opacity: 1; }
        }
        
        /* ... existing keyframes ... */
        @keyframes drift {
          0% { filter: blur(10px); }
          100% { transform: translate(0, 0) scale(1); filter: blur(0); opacity: 1; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes glow {
          from { text-shadow: 0 0 20px #C12C1F; }
          to { text-shadow: 0 0 40px #ff0000, 0 0 10px #C12C1F; }
        }
        
        @keyframes slideRight {
           0% { left: -100%; opacity: 0; }
           50% { opacity: 1; }
           100% { left: 100%; opacity: 0; }
        }

        @keyframes slideLeft {
           0% { right: -100%; opacity: 0; }
           50% { opacity: 1; }
           100% { right: 100%; opacity: 0; }
        }

      `}</style>

      <div className="st-container flex flex-col items-center">
        <div className="st-bar top"></div>
        <h1 className="st-title" style={{ fontSize: '4rem', marginBottom: '-10px' }}>
          <span>S</span><span>T</span><span>R</span><span>A</span><span>N</span><span>G</span><span>E</span><span>R</span>
        </h1>
        <h1 className="st-title" style={{ fontSize: '4rem', marginTop: '-10px' }}>
          <span>T</span><span>H</span><span>I</span><span>N</span><span>G</span><span>S</span>
        </h1>
        <div className="my-4 text-red-600 font-bold text-2xl animate-pulse">X</div>
        <h1 className="st-title" style={{ fontSize: '6rem', letterSpacing: '0.5rem' }}>
          <span>C</span><span>A</span><span>P</span><span>S</span>
        </h1>
        <h1 className="st-title" style={{ fontSize: '6rem', marginTop: '-20px', letterSpacing: '0.5rem' }}>
          <span>L</span><span>O</span><span>C</span><span>K</span>
        </h1>
        <div className="st-bar bottom"></div>
      </div>
    </div>
  );
};

export default StrangerThingsIntro;
