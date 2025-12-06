import React from 'react';

// Common base component for all avatars
const AvatarBase: React.FC<{ children: React.ReactNode, className?: string, bg: string }> = ({ children, className, bg }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill={bg} />
        {children}
    </svg>
);

// 1. Casual Boy
const Avatar1: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#FFD700">
        <circle cx="50" cy="50" r="35" fill="#F1C27D" /> {/* Skin */}
        <path d="M15,50 Q15,10 50,10 Q85,10 85,50 Z" fill="#4B0082" /> {/* Hair Base */}
        <path d="M15,50 Q15,25 30,25 Q50,50 85,30" fill="none" stroke="#4B0082" strokeWidth="0" /> {/* Hair Detail */}
        <circle cx="35" cy="55" r="4" fill="#333" /> {/* Left Eye */}
        <circle cx="65" cy="55" r="4" fill="#333" /> {/* Right Eye */}
        <path d="M40,70 Q50,80 60,70" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" /> {/* Smile */}
    </AvatarBase>
);

// 2. Casual Girl
const Avatar2: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#FF69B4">
        <circle cx="50" cy="50" r="35" fill="#FFDBAC" /> {/* Skin */}
        <path d="M10,60 Q10,0 50,0 Q90,0 90,60" fill="#8B4513" /> {/* Hair */}
        <path d="M90,60 L90,90 Q90,100 70,100 L70,60 Z" fill="#8B4513" /> {/* Hair R */}
        <path d="M10,60 L10,90 Q10,100 30,100 L30,60 Z" fill="#8B4513" /> {/* Hair L */}
        <circle cx="35" cy="55" r="4" fill="#333" />
        <circle cx="65" cy="55" r="4" fill="#333" />
        <path d="M40,75 Q50,65 60,75" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" /> {/* Smile */}
        <path d="M15,60 Q20,30 50,30 Q80,30 85,60" fill="none" stroke="#8B4513" strokeWidth="2" /> {/* Bangs */}
    </AvatarBase>
);

// 3. Boy with Glasses
const Avatar3: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#87CEEB">
        <circle cx="50" cy="50" r="35" fill="#E0AC69" />
        <path d="M20,45 Q20,15 50,15 Q80,15 80,45" fill="#333" /> {/* Hair */}
        <circle cx="35" cy="55" r="12" fill="none" stroke="#333" strokeWidth="3" /> {/* L Glasses */}
        <circle cx="65" cy="55" r="12" fill="none" stroke="#333" strokeWidth="3" /> {/* R Glasses */}
        <line x1="47" y1="55" x2="53" y2="55" stroke="#333" strokeWidth="3" /> {/* Bridge */}
        <circle cx="35" cy="55" r="2" fill="#333" />
        <circle cx="65" cy="55" r="2" fill="#333" />
        <path d="M45,75 Q50,78 55,75" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </AvatarBase>
);

// 4. Girl with Bun
const Avatar4: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#98FB98">
        <circle cx="50" cy="20" r="15" fill="#2F4F4F" /> {/* Bun */}
        <circle cx="50" cy="55" r="32" fill="#F1C27D" />
        <path d="M20,55 Q20,25 50,25 Q80,25 80,55" fill="#2F4F4F" /> {/* Hair Top */}
        <circle cx="35" cy="60" r="4" fill="#333" />
        <circle cx="65" cy="60" r="4" fill="#333" />
        <path d="M40,75 Q50,85 60,75" fill="none" stroke="#C71585" strokeWidth="3" strokeLinecap="round" />
    </AvatarBase>
);

// 5. Hoodie Guy
const Avatar5: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#708090">
        <path d="M15,100 L15,50 Q15,10 50,10 Q85,10 85,50 L85,100 Z" fill="#333" /> {/* Hood */}
        <circle cx="50" cy="55" r="28" fill="#8D5524" />
        <circle cx="38" cy="55" r="3" fill="#fff" />
        <circle cx="62" cy="55" r="3" fill="#fff" />
        <path d="M45,70 L55,70" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M15,100 L15,50 Q15,10 50,10 Q85,10 85,50 L85,100 Z" fill="none" stroke="#555" strokeWidth="5" />
    </AvatarBase>
);

// 6. Hijab Woman
const Avatar6: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#FFA07A">
        <path d="M20,100 Q10,40 50,20 Q90,40 80,100 Z" fill="#DC143C" /> {/* Hijab Back */}
        <ellipse cx="50" cy="55" rx="28" ry="32" fill="#E0AC69" />
        <path d="M22,50 Q50,20 78,50 L80,100 Q50,110 20,100 Z" fill="#DC143C" /> {/* Hijab Front */}
        <circle cx="38" cy="55" r="4" fill="#333" />
        <circle cx="62" cy="55" r="4" fill="#333" />
        <path d="M45,72 Q50,75 55,72" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </AvatarBase>
);

// 7. Punk
const Avatar7: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#FF4500">
        <path d="M45,10 L55,10 L60,40 L40,40 Z" fill="#00FF00" /> {/* Mohawk */}
        <circle cx="50" cy="55" r="30" fill="#FFDBAC" />
        <path d="M18,50 L22,50 L20,60 Z" fill="#00FF00" /> {/* Earring L */}
        <circle cx="38" cy="55" r="3" fill="#333" />
        <circle cx="62" cy="55" r="3" fill="#333" />
        <path d="M45,70 L55,70" fill="none" stroke="#333" strokeWidth="3" />
    </AvatarBase>
);

// 8. Headphones
const Avatar8: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#4169E1">
        <path d="M10,50 Q10,0 50,0 Q90,0 90,50 L90,60 L80,60 L80,40 Q80,20 50,20 Q20,20 20,40 L20,60 L10,60 Z" fill="#444" /> {/* Band */}
        <rect x="5" y="50" width="15" height="25" rx="5" fill="#111" /> {/* Ear L */}
        <rect x="80" y="50" width="15" height="25" rx="5" fill="#111" /> {/* Ear R */}
        <circle cx="50" cy="55" r="32" fill="#F1C27D" />
        <circle cx="38" cy="55" r="4" fill="#333" />
        <circle cx="62" cy="55" r="4" fill="#333" />
        <path d="M45,75 Q50,80 55,75" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </AvatarBase>
);

// 9. Cool Cat
const Avatar9: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#9370DB">
        <path d="M20,30 L30,60 L70,60 L80,30 L60,40 L40,40 Z" fill="#FFF" /> {/* Ears Base */}
        <circle cx="50" cy="65" r="30" fill="#FFF" />
        <polygon points="20,30 35,60 45,50" fill="#FFB6C1" /> {/* Ear Inner L */}
        <polygon points="80,30 65,60 55,50" fill="#FFB6C1" /> {/* Ear Inner R */}
        <circle cx="38" cy="60" r="5" fill="#333" />
        <circle cx="62" cy="60" r="5" fill="#333" />
        <polygon points="45,70 55,70 50,75" fill="#FF69B4" /> {/* Nose */}
        <path d="M30,70 L10,65 M30,75 L10,75 M70,70 L90,65 M70,75 L90,75" stroke="#333" strokeWidth="2" /> {/* Whiskers */}
    </AvatarBase>
);

// 10. Happy Bear
const Avatar10: React.FC<{ className?: string }> = ({ className }) => (
    <AvatarBase className={className} bg="#8B4513">
        <circle cx="20" cy="30" r="12" fill="#A0522D" /> {/* Ear L */}
        <circle cx="80" cy="30" r="12" fill="#A0522D" /> {/* Ear R */}
        <circle cx="50" cy="55" r="35" fill="#A0522D" />
        <circle cx="50" cy="70" r="15" fill="#D2691E" /> {/* Snout */}
        <circle cx="38" cy="50" r="4" fill="#000" />
        <circle cx="62" cy="50" r="4" fill="#000" />
        <circle cx="50" cy="65" r="5" fill="#333" /> {/* Nose */}
        <path d="M45,75 Q50,80 55,75" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
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