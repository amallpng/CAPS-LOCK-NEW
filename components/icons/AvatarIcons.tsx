import React from 'react';

// Common base component for all avatars
const AvatarBase: React.FC<{ children: React.ReactNode, className?: string, id: string }> = ({ children, className, id }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <style>{`
            @keyframes blink-${id} { 0%, 90%, 100% { opacity: 1; } 95% { opacity: 0; } }
            @keyframes bob-${id} { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1px); } }
            @keyframes float-${id} { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
            @keyframes glow-${id} { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
            @keyframes mouth-${id} { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.5); } }
            .eyes-${id} { animation: blink-${id} 4s infinite; transform-origin: center; }
            .head-${id} { animation: bob-${id} 2s infinite ease-in-out; }
            .floating-${id} { animation: float-${id} 3s infinite ease-in-out; }
            .glowing-${id} { animation: glow-${id} 1.5s infinite; }
            .talking-${id} { animation: mouth-${id} 0.5s infinite; transform-origin: 12px 15px; }
        `}</style>
        <g>{children}</g>
    </svg>
);

// Helper to create pixel art paths
const P = (props: { c: string, d: string, className?: string }) => <path fill={props.c} d={props.d} className={props.className} />;

// 1. Robot (Blinking Eyes + Bobbing)
const Avatar1: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="1">
        <g className="head-1">
            <P c="#95a5a6" d="M7,5h10v14H7z" />
            <P c="#7f8c8d" d="M7,5h10v2H7z M7,17h10v2H7z" />
            <P c="#34495e" d="M9,9h6v4H9z" />
            <P c="#2ecc71" d="M10,10h1v2h-1z M13,10h1v2h-1z" className="eyes-1" />
            <P c="#e74c3c" d="M11,3h2v2h-2z" className="glowing-1" /> {/* Antenna */}
            <P c="#bdc3c7" d="M12,5h0v0h0z" />
        </g>
    </AvatarBase>
);

// 2. Cat (Floating + Blinking)
const Avatar2: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="2">
        <g className="floating-2">
            <P c="#f39c12" d="M7,8h2v-2h-2z M15,8h2v-2h-2z M6,9h12v11H6z" />
            <P c="#fff" d="M10,13h4v4h-4z" />
            <P c="#222" d="M8,11h2v2h-2z M14,11h2v2h-2z" className="eyes-2" />
            <P c="#ffada6" d="M11,15h2v1h-2z" />
        </g>
    </AvatarBase>
);

// 3. Alien (Glowing Eyes)
const Avatar3: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="3">
        <g className="head-3">
            <P c="#2ecc71" d="M6,6h12v14H6z" />
            <P c="#27ae60" d="M6,6h12v3H6z" />
            <P c="#222" d="M8,10h3v3H8z M13,10h3v3h-3z" />
            <P c="#f1c40f" d="M9,11h1v1h-1z M14,11h1v1h-1z" className="glowing-3" />
            <P c="#222" d="M10,16h4v1h-4z" />
        </g>
    </AvatarBase>
);

// 4. Cool Kid (Bobbing + Sunglasses Glint)
const Avatar4: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="4">
        <g className="head-4">
            <P c="#ffc999" d="M8,9h8v7H8z" />
            <P c="#f1c40f" d="M8,7h8v3H8z" />
            <P c="#222" d="M8,11h8v2H8z" /> {/* Glasses */}
            <P c="#fff" d="M9,11h2v1h-2z" className="glowing-4" /> {/* Glint */}
            <P c="#c0392b" d="M8,16h8v2H8z" />
        </g>
    </AvatarBase>
);

// 5. Ghost (Floating + Transparent)
const Avatar5: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="5">
        <g className="floating-5">
            <P c="#ecf0f1" d="M7,6h10v14H7z" />
            <P c="#222" d="M9,9h2v2H9z M13,9h2v2h-2z" className="eyes-5" />
            <P c="#222" d="M11,13h2v2h-2z" className="talking-5" />
        </g>
    </AvatarBase>
);

// 6. Cyberpunk Girl (Glowing Headset)
const Avatar6: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="6">
        <P c="#ffc999" d="M8,9h8v7H8z" />
        <P c="#8e44ad" d="M7,7h10v5H7z" />
        <P c="#222" d="M10,12h1v1h-1z M14,12h1v1h-1z" className="eyes-6" />
        <P c="#e91e63" d="M6,9h2v4H6z M16,9h2v4h-2z" className="glowing-6" /> {/* Headphones */}
        <P c="#34495e" d="M8,16h8v2H8z" />
    </AvatarBase>
);

// 7. Ninja (Bobbing + Moving Headband)
const Avatar7: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="7">
        <g className="head-7">
            <P c="#f1c40f" d="M8,9h8v7H8z" />
            <P c="#222" d="M7,6h10v14H7z" />
            <P c="#ffc999" d="M8,10h8v3H8z" /> {/* Face reveal */}
            <P c="#c0392b" d="M7,8h10v2H7z" /> {/* Headband */}
            <P c="#c0392b" d="M16,8h3v2h-3z" className="floating-7" /> {/* Bandana tail */}
            <P c="#222" d="M9,11h2v1h-2z M13,11h2v1h-2z" className="eyes-7" />
        </g>
    </AvatarBase>
);

// 8. Slime (Squish Animation)
const Avatar8: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="8">
        <style>{`@keyframes squish-8 { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.9) translateY(1px); } } .squish-8 { animation: squish-8 1s infinite; transform-origin: bottom; }`}</style>
        <g className="squish-8">
            <P c="#2ecc71" d="M7,10h10v10H7z" />
            <P c="#27ae60" d="M7,18h10v2H7z" />
            <P c="#222" d="M9,13h2v2H9z M13,13h2v2h-2z" className="eyes-8" />
        </g>
    </AvatarBase>
);

// 9. Pumpkin (Glowing Light)
const Avatar9: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="9">
        <P c="#d35400" d="M7,7h10v12H7z" />
        <P c="#27ae60" d="M11,5h2v2h-2z" />
        <P c="#f1c40f" d="M9,10h2v2H9z M13,10h2v2h-2z M10,14h4v2h-4z" className="glowing-9" />
    </AvatarBase>
);

// 10. Diver (Bubbles)
const Avatar10: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} id="10">
        <style>{`@keyframes bubble-10 { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-5px); opacity: 0; } } .bubble-10 { animation: bubble-10 2s infinite; }`}</style>
        <P c="#ffc999" d="M8,9h8v7H8z" />
        <P c="#3498db" d="M7,7h10v12H7z" style={{ fillOpacity: 0.5 }} /> {/* Water helmet */}
        <P c="#222" d="M9,11h2v1h-2z M13,11h2v1h-2z" />
        <P c="#fff" d="M15,6h2v2h-2z" className="bubble-10" />
    </AvatarBase>
);

export const avatarComponents: { [key: string]: React.FC<{ className?: string }> } = {
    avatar1: Avatar1,
    avatar2: Avatar2,
    avatar3: Avatar3,
    avatar4: Avatar4,
    avatar5: Avatar5,
    avatar6: Avatar6,
    avatar7: Avatar7,
    avatar8: Avatar8,
    avatar9: Avatar9,
    avatar10: Avatar10,
};

export const avatarOptions = Object.keys(avatarComponents);