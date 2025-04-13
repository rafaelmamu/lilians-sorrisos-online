
import React from 'react';

interface MascotProps {
  className?: string;
  variant?: 'default' | 'waving' | 'toothbrush';
  size?: 'sm' | 'md' | 'lg';
}

const Mascot = ({ className = "", variant = 'default', size = 'md' }: MascotProps) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {variant === 'default' && (
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Body - Light green */}
            <ellipse cx="100" cy="120" rx="50" ry="60" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3" />
            
            {/* Head - Light green */}
            <circle cx="100" cy="70" r="40" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3" />
            
            {/* Eyes - White with black pupils */}
            <circle cx="85" cy="60" r="10" fill="white" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="115" cy="60" r="10" fill="white" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="85" cy="60" r="5" fill="#333" />
            <circle cx="115" cy="60" r="5" fill="#333" />
            
            {/* Smile - Big happy smile */}
            <path d="M80,80 Q100,100 120,80" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            
            {/* Arms - Small T-Rex arms */}
            <path d="M60,110 Q50,100 45,110" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            <path d="M140,110 Q150,100 155,110" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            
            {/* Teeth - Big front teeth */}
            <rect x="90" y="82" width="8" height="10" fill="white" stroke="#2E7D32" strokeWidth="1" rx="1" />
            <rect x="102" y="82" width="8" height="10" fill="white" stroke="#2E7D32" strokeWidth="1" rx="1" />
            
            {/* Spikes - Decorative back spikes */}
            <path d="M80,30 L85,20 L90,30 L95,15 L100,30 L105,15 L110,30 L115,20 L120,30" fill="none" stroke="#43A047" strokeWidth="3" />
            
            {/* Tail */}
            <path d="M100,180 Q130,200 150,170" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {/* Toothbrush if needed */}
          <div className="absolute bottom-4 right-0 text-lg font-bold font-display text-dental-blue">Sorrisauro</div>
        </div>
      )}

      {variant === 'waving' && (
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Same body and head */}
            <ellipse cx="100" cy="120" rx="50" ry="60" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3" />
            <circle cx="100" cy="70" r="40" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3" />
            
            {/* Eyes - Happier with curved lines */}
            <circle cx="85" cy="60" r="10" fill="white" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="115" cy="60" r="10" fill="white" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="85" cy="60" r="5" fill="#333" />
            <circle cx="115" cy="60" r="5" fill="#333" />
            
            {/* Bigger smile */}
            <path d="M75,80 Q100,105 125,80" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            
            {/* Waving arm */}
            <path d="M60,110 Q40,80 30,70" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            <path d="M140,110 Q150,100 155,110" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            
            {/* Teeth */}
            <rect x="90" y="82" width="8" height="10" fill="white" stroke="#2E7D32" strokeWidth="1" rx="1" />
            <rect x="102" y="82" width="8" height="10" fill="white" stroke="#2E7D32" strokeWidth="1" rx="1" />
            
            {/* Spikes */}
            <path d="M80,30 L85,20 L90,30 L95,15 L100,30 L105,15 L110,30 L115,20 L120,30" fill="none" stroke="#43A047" strokeWidth="3" />
            
            {/* Tail */}
            <path d="M100,180 Q130,200 150,170" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute bottom-4 right-0 text-lg font-bold font-display text-dental-blue">Sorrisauro</div>
        </div>
      )}

      {variant === 'toothbrush' && (
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Same body and head */}
            <ellipse cx="100" cy="120" rx="50" ry="60" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3" />
            <circle cx="100" cy="70" r="40" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3" />
            
            {/* Eyes */}
            <circle cx="85" cy="60" r="10" fill="white" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="115" cy="60" r="10" fill="white" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="85" cy="60" r="5" fill="#333" />
            <circle cx="115" cy="60" r="5" fill="#333" />
            
            {/* Smile */}
            <path d="M80,80 Q100,100 120,80" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            
            {/* Arm holding toothbrush */}
            <path d="M60,110 Q40,90 35,75" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            <path d="M140,110 Q150,100 155,110" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            
            {/* Toothbrush */}
            <rect x="20" y="60" width="40" height="6" fill="#FF9800" rx="2" />
            <rect x="10" y="55" width="15" height="15" fill="#64B5F6" rx="2" />
            <path d="M10,60 L5,62 L10,64 L15,62 L10,60" fill="white" />
            
            {/* Teeth */}
            <rect x="90" y="82" width="8" height="10" fill="white" stroke="#2E7D32" strokeWidth="1" rx="1" />
            <rect x="102" y="82" width="8" height="10" fill="white" stroke="#2E7D32" strokeWidth="1" rx="1" />
            
            {/* Spikes */}
            <path d="M80,30 L85,20 L90,30 L95,15 L100,30 L105,15 L110,30 L115,20 L120,30" fill="none" stroke="#43A047" strokeWidth="3" />
            
            {/* Tail */}
            <path d="M100,180 Q130,200 150,170" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute bottom-4 right-0 text-lg font-bold font-display text-dental-blue">Sorrisauro</div>
        </div>
      )}
    </div>
  );
};

export default Mascot;
