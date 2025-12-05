import React from 'react';
import ReactDOMServer from 'react-dom/server';

type BadgeAsset = {
  component: React.FC<{ className?: string }>;
  svgString: string;
};

// --- Helper for Progressive Colors ---
const getProgressColor = (level: number) => {
  const progress = (level - 1) % 10; // 0-9
  const hue = 30 + (progress * 30); // Bronze to Gold spectrum
  const saturation = 40 + (progress * 4);
  const lightness = 35 + (progress * 3);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// --- Realistic 3D Evolution Icons ---

const MechanicalTypewriter: React.FC<{ className?: string; level: number }> = ({ className, level }) => {
  const accent = getProgressColor(level);
  const gradientId = `typewriter-grad-${level}`;
  const shadowId = `typewriter-shadow-${level}`;

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={`paper-${level}`} cx="50%" cy="30%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f5dc" />
        </radialGradient>
      </defs>

      {/* Paper with texture */}
      <rect x="20" y="4" width="24" height="18" fill={`url(#paper-${level})`} stroke="#d3d3d3" strokeWidth="0.5" filter={`url(#${shadowId})`} />
      <line x1="22" y1="8" x2="40" y2="8" stroke="#ccc" strokeWidth="0.5" opacity="0.6" />
      <line x1="22" y1="12" x2="38" y2="12" stroke="#ccc" strokeWidth="0.5" opacity="0.6" />
      <line x1="22" y1="16" x2="40" y2="16" stroke="#ccc" strokeWidth="0.5" opacity="0.6" />

      {/* Main body with metallic effect */}
      <rect x="8" y="22" width="48" height="28" rx="2" fill={`url(#${gradientId})`} filter={`url(#${shadowId})`} />
      <rect x="8" y="22" width="48" height="4" fill={accent} opacity="0.8" />

      {/* Highlight reflection */}
      <rect x="10" y="24" width="44" height="2" fill="white" opacity="0.2" />

      {/* Keys with 3D effect */}
      {[...Array(12)].map((_, i) => {
        const x = 12 + (i % 6) * 7;
        const y = 32 + Math.floor(i / 6) * 8;
        return (
          <g key={i}>
            <rect x={x} y={y} width="5" height="5" rx="0.5" fill="#2a2a2a" />
            <rect x={x} y={y} width="5" height="4" rx="0.5" fill="#3a3a3a" />
            <rect x={x} y={y} width="5" height="1" fill="white" opacity="0.3" />
          </g>
        );
      })}

      {/* Return lever */}
      <rect x="58" y="26" width="4" height="12" rx="1" fill="#666" filter={`url(#${shadowId})`} />
      <circle cx="60" cy="26" r="2" fill="#888" />

      {/* Level badge */}
      <circle cx="32" cy="56" r="6" fill={accent} filter={`url(#${shadowId})`} />
      <text x="32" y="59" fill="white" fontFamily="'Special Elite', monospace" fontSize="7" fontWeight="bold" textAnchor="middle">{level}</text>
    </svg>
  );
};

const ElectricTypewriter: React.FC<{ className?: string; level: number }> = ({ className, level }) => {
  const accent = getProgressColor(level);
  const gradientId = `electric-grad-${level}`;
  const shadowId = `electric-shadow-${level}`;

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="50%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Roller mechanism */}
      <ellipse cx="32" cy="16" rx="20" ry="3" fill="#2a2a2a" filter={`url(#${shadowId})`} />
      <rect x="12" y="14" width="40" height="4" fill="#333" />

      {/* Main body - sleek design */}
      <path d="M 6 24 L 58 24 L 58 50 Q 58 52 56 52 L 8 52 Q 6 52 6 50 Z" fill={`url(#${gradientId})`} filter={`url(#${shadowId})`} />

      {/* Top accent strip */}
      <rect x="6" y="24" width="52" height="6" fill={accent} opacity="0.7" />
      <rect x="8" y="25" width="48" height="2" fill="white" opacity="0.4" />

      {/* Keys area - modern grid */}
      <rect x="10" y="34" width="44" height="14" rx="1" fill="#555" />
      {[...Array(15)].map((_, i) => {
        const x = 12 + (i % 8) * 5;
        const y = 36 + Math.floor(i / 8) * 5;
        return (
          <rect key={i} x={x} y={y} width="3.5" height="3.5" rx="0.3" fill="#2a2a2a" opacity="0.8" />
        );
      })}

      {/* Power indicator */}
      <circle cx="54" cy="38" r="1.5" fill={level % 2 === 0 ? "#00ff00" : "#00cc00"} opacity="0.9" />

      {/* Cord */}
      <path d="M 58 42 Q 62 42 62 46" stroke="#333" strokeWidth="2" fill="none" />

      {/* Level badge */}
      <circle cx="32" cy="58" r="6" fill={accent} filter={`url(#${shadowId})`} />
      <text x="32" y="61" fill="white" fontFamily="'Special Elite', monospace" fontSize="7" fontWeight="bold" textAnchor="middle">{level}</text>
    </svg>
  );
};

const VintageTerminal: React.FC<{ className?: string; level: number }> = ({ className, level }) => {
  const accent = getProgressColor(level);
  const gradientId = `terminal-grad-${level}`;
  const shadowId = `terminal-shadow-${level}`;
  const screenGlow = `screen-glow-${level}`;

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5f5dc" />
          <stop offset="100%" stopColor="#d4c5a0" />
        </linearGradient>
        <filter id={shadowId}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={screenGlow}>
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Monitor housing */}
      <rect x="10" y="6" width="44" height="32" rx="2" fill={`url(#${gradientId})`} filter={`url(#${shadowId})`} />

      {/* Screen bezel */}
      <rect x="12" y="8" width="40" height="26" rx="1" fill="#1a1a1a" />

      {/* CRT screen with curvature effect */}
      <rect x="14" y="10" width="36" height="22" rx="0.5" fill="#0a0a0a" />

      {/* Screen content with glow */}
      <g filter={`url(#${screenGlow})`}>
        <text x="16" y="16" fill="#00ff00" fontFamily="monospace" fontSize="3" opacity="0.9">C:\&gt; DIR</text>
        <text x="16" y="20" fill="#00ff00" fontFamily="monospace" fontSize="3" opacity="0.8">SYSTEM.EXE</text>
        <text x="16" y="24" fill="#00ff00" fontFamily="monospace" fontSize="3" opacity="0.7">CONFIG.SYS</text>
        <rect x="16" y="26" width="2" height="4" fill="#00ff00" opacity={level % 2 === 0 ? "1" : "0.3"} />
      </g>

      {/* Screen reflection */}
      <rect x="14" y="10" width="36" height="8" fill="white" opacity="0.05" />

      {/* Keyboard base */}
      <path d="M 4 40 L 60 40 L 56 52 L 8 52 Z" fill="#c5b89a" filter={`url(#${shadowId})`} />
      <rect x="8" y="42" width="48" height="8" fill={accent} opacity="0.6" />

      {/* Keys */}
      {[...Array(20)].map((_, i) => {
        const x = 10 + (i % 10) * 4.5;
        const y = 43 + Math.floor(i / 10) * 3;
        return (
          <rect key={i} x={x} y={y} width="3" height="2" rx="0.2" fill="#2a2a2a" opacity="0.7" />
        );
      })}

      {/* Level badge */}
      <circle cx="32" cy="58" r="6" fill={accent} filter={`url(#${shadowId})`} />
      <text x="32" y="61" fill="white" fontFamily="'Special Elite', monospace" fontSize="7" fontWeight="bold" textAnchor="middle">{level}</text>
    </svg>
  );
};

const ModernKeyboard: React.FC<{ className?: string; level: number }> = ({ className, level }) => {
  const accent = getProgressColor(level);
  const gradientId = `modern-grad-${level}`;
  const shadowId = `modern-shadow-${level}`;
  const rgbEffect = level % 10 > 7;

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id={`rgb-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff0000" />
          <stop offset="33%" stopColor="#00ff00" />
          <stop offset="66%" stopColor="#0000ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
        <filter id={shadowId}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Keyboard base with angle */}
      <path d="M 4 24 L 60 24 L 58 48 L 6 48 Z" fill={`url(#${gradientId})`} filter={`url(#${shadowId})`} />

      {/* Top edge highlight */}
      <path d="M 4 24 L 60 24 L 60 26 L 4 26 Z" fill="white" opacity="0.1" />

      {/* Keys with RGB or standard lighting */}
      {[...Array(40)].map((_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const x = 8 + col * 5;
        const y = 28 + row * 4.5;
        const keyWidth = (row === 3 && col === 4) ? 10 : 4; // Spacebar

        if (row === 3 && col > 4) return null;

        return (
          <g key={i}>
            <rect x={x} y={y} width={keyWidth} height="3.5" rx="0.5" fill="#1a1a1a" />
            <rect x={x} y={y} width={keyWidth} height="3" rx="0.5" fill={rgbEffect ? `url(#rgb-${level})` : "#3a3a3a"} opacity={rgbEffect ? "0.8" : "1"} />
            <rect x={x} y={y} width={keyWidth} height="0.8" rx="0.3" fill="white" opacity="0.2" />
          </g>
        );
      })}

      {/* USB cable */}
      <path d="M 32 24 L 32 18 Q 32 16 34 16 L 38 16" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.8" />
      <rect x="38" y="15" width="4" height="2" rx="0.5" fill={accent} />

      {/* Level badge */}
      <circle cx="32" cy="56" r="6" fill={accent} filter={`url(#${shadowId})`} />
      <text x="32" y="59" fill="white" fontFamily="'Special Elite', monospace" fontSize="7" fontWeight="bold" textAnchor="middle">{level}</text>
    </svg>
  );
};

const CyberDeck: React.FC<{ className?: string; level: number }> = ({ className, level }) => {
  const accent = getProgressColor(level);
  const gradientId = `cyber-grad-${level}`;
  const shadowId = `cyber-shadow-${level}`;
  const glowId = `cyber-glow-${level}`;

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffcc" />
          <stop offset="50%" stopColor={accent} />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
        <filter id={shadowId}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.6" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={`holo-${level}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Base platform */}
      <path d="M 4 36 L 60 36 L 54 52 L 10 52 Z" fill="#0a0a1a" filter={`url(#${shadowId})`} />
      <path d="M 4 36 L 60 36 L 60 38 L 4 38 Z" fill={`url(#${gradientId})`} opacity="0.6" />

      {/* Holographic projection field */}
      <ellipse cx="32" cy="28" rx="24" ry="8" fill={`url(#holo-${level})`} opacity="0.3" />

      {/* Floating holographic keys */}
      {[...Array(15)].map((_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 12 + (i % 3) * 4;
        const x = 32 + Math.cos(angle) * radius;
        const y = 20 + Math.sin(angle) * (radius * 0.3) - (i % 3) * 3;
        const size = 3 - (i % 3) * 0.5;

        return (
          <g key={i} filter={`url(#${glowId})`}>
            <rect x={x - size / 2} y={y - size / 2} width={size} height={size} rx="0.3"
              fill={`url(#${gradientId})`} opacity="0.7" />
            <rect x={x - size / 2} y={y - size / 2} width={size} height={size * 0.3} rx="0.2"
              fill="white" opacity="0.4" />
          </g>
        );
      })}

      {/* Projection beams */}
      <path d="M 10 36 L 8 16" stroke={`url(#${gradientId})`} strokeWidth="0.5" opacity="0.4" />
      <path d="M 32 36 L 32 12" stroke={`url(#${gradientId})`} strokeWidth="0.5" opacity="0.4" />
      <path d="M 54 36 L 56 16" stroke={`url(#${gradientId})`} strokeWidth="0.5" opacity="0.4" />

      {/* Emitter nodes */}
      <circle cx="10" cy="38" r="2" fill={`url(#${gradientId})`} filter={`url(#${glowId})`} />
      <circle cx="32" cy="38" r="2" fill={`url(#${gradientId})`} filter={`url(#${glowId})`} />
      <circle cx="54" cy="38" r="2" fill={`url(#${gradientId})`} filter={`url(#${glowId})`} />

      {/* Level badge with glow */}
      <circle cx="32" cy="58" r="7" fill={accent} filter={`url(#${glowId})`} />
      <circle cx="32" cy="58" r="6" fill={`url(#${gradientId})`} />
      <text x="32" y="61" fill="white" fontFamily="'Special Elite', monospace" fontSize="7" fontWeight="bold" textAnchor="middle">{level}</text>
    </svg>
  );
};

const MasterCrown: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="master-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#FFF700" />
        <stop offset="100%" stopColor="#FFD700" />
      </radialGradient>
    </defs>
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" fill="url(#master-gradient)" />
    <path d="M5 16v2h14v-2H5z" fill="#FFA500" />
  </svg>
);

const GrandMasterTrophy: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gmt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E5E4E2" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#BFC1C2" />
      </linearGradient>
    </defs>
    <path d="M19 4H5C3.89 4 3 4.9 3 6V8C3 9.1 3.89 10 5 10H6V18C6 19.1 6.89 20 8 20H16C17.11 20 18 19.1 18 18V10H19C20.11 10 21 9.1 21 8V6C21 4.9 20.11 4 19 4Z" fill="url(#gmt-gradient)" stroke="#4A6B4A" strokeWidth="1" />
    <path d="M12 10V18" stroke="#4A6B4A" strokeWidth="1" strokeLinecap="round" />
    <path d="M8 20H16V22H8V20Z" fill="#A9A391" stroke="#4A6B4A" strokeWidth="1" />
    <text x="12" y="16" fill="#1f3b1f" fontFamily="'Special Elite', monospace" fontWeight="bold" fontSize="5.5" textAnchor="middle">100</text>
  </svg>
);


const icons: Record<string, React.FC<{ className?: string }>> = {
  MasterCrown,
  GrandMasterTrophy,
};

// Programmatically generate badge components
for (let i = 1; i <= 99; i++) {
  let Component: React.FC<{ className?: string }>;

  if (i <= 10) {
    Component = ({ className }) => <MechanicalTypewriter className={className} level={i} />;
  } else if (i <= 20) {
    Component = ({ className }) => <ElectricTypewriter className={className} level={i} />;
  } else if (i <= 30) {
    Component = ({ className }) => <VintageTerminal className={className} level={i} />;
  } else if (i <= 40) {
    Component = ({ className }) => <ModernKeyboard className={className} level={i} />;
  } else {
    Component = ({ className }) => <CyberDeck className={className} level={i} />;
  }

  Object.defineProperty(Component, "name", { value: `LevelBadge${i}` });
  icons[`LevelBadge${i}`] = Component;
}


// Helper to create the final export object
const createBadgeAssets = <T extends Record<string, React.FC<{ className?: string }>>>(iconComponents: T): Record<keyof T, BadgeAsset> => {
  const assets = {} as Record<keyof T, BadgeAsset>;
  for (const key in iconComponents) {
    const Component = iconComponents[key];
    assets[key] = {
      component: Component,
      svgString: ReactDOMServer.renderToStaticMarkup(React.createElement(Component as any)),
    };
  }
  return assets;
};

export const BadgeIcons = createBadgeAssets(icons);