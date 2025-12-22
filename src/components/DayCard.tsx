import { Lock, Gift, Sparkles, Snowflake, Star } from 'lucide-react';

interface DayCardProps {
  day?: number;
  date?: Date;
  theme: 'christmas' | 'winter' | 'spring';
  isInRange: boolean;
  isOpened: boolean;
  isAvailable: boolean;
  isLocked: boolean;
  onClick?: () => void;
}

export function DayCard({ 
  day, 
  date, 
  theme, 
  isInRange, 
  isOpened, 
  isAvailable, 
  isLocked,
  onClick 
}: DayCardProps) {
  if (!day || !date) {
    return <div className="aspect-square" />;
  }

  const getThemeStyles = () => {
    if (!isInRange) {
      return {
        bg: 'bg-gray-100',
        border: 'border-gray-200',
        text: 'text-gray-300',
        icon: null,
        pattern: null,
      };
    }

    if (isOpened) {
      switch (theme) {
        case 'christmas':
          return {
            bg: 'bg-gradient-to-br from-red-100 via-white to-green-100',
            border: 'border-red-300 shadow-md shadow-red-200',
            text: 'text-red-700',
            icon: <Gift className="w-4 h-4 md:w-5 md:h-5 text-red-500" />,
            pattern: (
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1 right-1 text-xs">🎄</div>
                <div className="absolute bottom-1 left-1 text-xs">⭐</div>
              </div>
            ),
          };
        case 'winter':
          return {
            bg: 'bg-gradient-to-br from-blue-100 via-white to-cyan-100',
            border: 'border-blue-300 shadow-md shadow-blue-200',
            text: 'text-blue-700',
            icon: <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />,
            pattern: (
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1 right-1 text-xs">❄️</div>
                <div className="absolute bottom-1 left-1 text-xs">⛄</div>
              </div>
            ),
          };
        case 'spring':
          return {
            bg: 'bg-gradient-to-br from-pink-100 via-white to-purple-100',
            border: 'border-pink-300 shadow-md shadow-pink-200',
            text: 'text-pink-700',
            icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
            pattern: (
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1 right-1 text-xs">🌸</div>
                <div className="absolute bottom-1 left-1 text-xs">🦋</div>
              </div>
            ),
          };
      }
    }

    if (isAvailable) {
      switch (theme) {
        case 'christmas':
          return {
            bg: 'bg-gradient-to-br from-red-400 via-red-500 to-green-500',
            border: 'border-yellow-400 shadow-lg shadow-red-300',
            text: 'text-white',
            icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-200 animate-pulse" />,
            pattern: (
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)]" />
              </div>
            ),
          };
        case 'winter':
          return {
            bg: 'bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500',
            border: 'border-cyan-300 shadow-lg shadow-blue-300',
            text: 'text-white',
            icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-cyan-200 animate-pulse" />,
            pattern: (
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
                <div className="absolute top-1 right-2 w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute bottom-2 left-1 w-1 h-1 bg-white/40 rounded-full" />
              </div>
            ),
          };
        case 'spring':
          return {
            bg: 'bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500',
            border: 'border-pink-300 shadow-lg shadow-pink-300',
            text: 'text-white',
            icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-200 animate-pulse" />,
            pattern: (
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)]" />
              </div>
            ),
          };
      }
    }

    if (isLocked) {
      switch (theme) {
        case 'christmas':
          return {
            bg: 'bg-gradient-to-br from-red-200 via-red-100 to-green-200',
            border: 'border-red-300',
            text: 'text-red-600',
            icon: <Lock className="w-4 h-4 md:w-5 md:h-5 text-red-400" />,
            pattern: (
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(220,38,38,0.1)_49%,rgba(220,38,38,0.1)_51%,transparent_52%)] bg-[length:8px_8px]" />
              </div>
            ),
          };
        case 'winter':
          return {
            bg: 'bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-200',
            border: 'border-blue-300',
            text: 'text-blue-600',
            icon: <Lock className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />,
            pattern: (
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.1)_49%,rgba(59,130,246,0.1)_51%,transparent_52%)] bg-[length:8px_8px]" />
              </div>
            ),
          };
        case 'spring':
          return {
            bg: 'bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200',
            border: 'border-pink-300',
            text: 'text-pink-600',
            icon: <Lock className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />,
            pattern: (
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(236,72,153,0.1)_49%,rgba(236,72,153,0.1)_51%,transparent_52%)] bg-[length:8px_8px]" />
              </div>
            ),
          };
      }
    }

    return {
      bg: 'bg-gray-100',
      border: 'border-gray-200',
      text: 'text-gray-400',
      icon: null,
      pattern: null,
    };
  };

  const styles = getThemeStyles();

  return (
    <button
      onClick={onClick}
      disabled={!isAvailable}
      className={`
        aspect-square rounded-2xl border-2 ${styles.border} ${styles.bg}
        flex flex-col items-center justify-center gap-1
        transition-all duration-300
        ${isAvailable ? 'cursor-pointer hover:scale-110 hover:shadow-2xl active:scale-95' : ''}
        ${isLocked ? 'cursor-not-allowed' : ''}
        ${!isInRange ? 'opacity-40' : ''}
        relative overflow-hidden
      `}
    >
      {/* Pattern overlay */}
      {styles.pattern}
      
      {/* Icon */}
      {styles.icon && (
        <div className="mb-1 relative z-10">
          {styles.icon}
        </div>
      )}

      {/* Day number */}
      <span className={`${styles.text} text-sm md:text-lg relative z-10`}>
        {day}
      </span>

      {/* Sparkle effect for available days */}
      {isAvailable && !isOpened && (
        <>
          <div className="absolute top-1 right-1 z-10">
            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping" />
          </div>
          <div className="absolute bottom-1 left-1 z-10">
            <div className="w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse" />
          </div>
        </>
      )}
    </button>
  );
}
