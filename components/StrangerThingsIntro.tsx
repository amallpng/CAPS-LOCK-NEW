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
          perspective: 3000px;
        }

        .st-title {
          font-family: 'Benguiat', serif;
          font-size: 8rem;
          color: transparent;
          text-transform: uppercase;
          letter-spacing: -0.5rem;
          -webkit-text-stroke: 2px #C12C1F;
          text-shadow: 0 0 30px rgba(193, 44, 31, 0.5);
          animation: 
            zoomIn 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
            glow 2s ease-in-out infinite alternate;
        }

        .st-title span {
          display: inline-block;
          opacity: 0;
          animation: drift 3.5s ease-out forwards, fadeIn 1s ease-in forwards;
        }

        /* Animation Delays for each letter to create the "coming together" effect */
        /* Animation Delays for each letter to create the "coming together" effect */
        .st-title span:nth-child(1) { animation-delay: 0.1s; transform: translateX(-100px) scale(0.8); }
        .st-title span:nth-child(2) { animation-delay: 0.3s; transform: translateY(-100px) scale(1.2); }
        .st-title span:nth-child(3) { animation-delay: 0.5s; transform: translateX(100px) scale(0.9); }
        .st-title span:nth-child(4) { animation-delay: 0.2s; transform: translateY(100px) scale(1.1); }
        .st-title span:nth-child(5) { animation-delay: 0.4s; transform: translateX(-50px) scale(1.05); }
        .st-title span:nth-child(6) { animation-delay: 0.6s; transform: translateY(-50px) scale(0.95); }
        .st-title span:nth-child(7) { animation-delay: 0.35s; transform: translateX(50px) scale(1.1); }
        .st-title span:nth-child(8) { animation-delay: 0.55s; transform: translateY(50px) scale(0.85); }
        
        .st-bar {
          position: absolute;
          width: 100vw;
          height: 5px;
          background: #C12C1F;
          box-shadow: 0 0 20px #C12C1F;
          opacity: 0;
        }
        
        .st-bar.top {
          top: 20%;
          left: -100%;
          animation: slideRight 3s ease-out forwards;
        }
        
        .st-bar.bottom {
          bottom: 20%;
          right: -100%;
          animation: slideLeft 3s ease-out forwards;
        }

        @keyframes zoomIn {
          0% { transform: scale(10); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

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
