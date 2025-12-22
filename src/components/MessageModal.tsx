import { X } from 'lucide-react';
import { DayData } from '../App';
import { useEffect } from 'react';

interface MessageModalProps {
  dayData: DayData;
  onClose: () => void;
}

export function MessageModal({ dayData, onClose }: MessageModalProps) {
  const month = dayData.date.getMonth();
  
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getThemeStyles = () => {
    switch (month) {
      case 11: // December - Christmas
        return {
          bg: 'bg-gradient-to-br from-red-50 via-green-50 to-yellow-50',
          border: 'border-red-300',
          headerBg: 'bg-gradient-to-r from-red-500 via-green-500 to-red-600',
          emoji: '🎄',
          image: 'https://images.unsplash.com/photo-1607263027601-84271af2b2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW5nZXJicmVhZCUyMGhvdXNlJTIwY29va2llc3xlbnwxfHx8fDE3NjY0MzMzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
          decoration: (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🎅</div>
              <div className="absolute top-8 right-8 text-3xl opacity-20 animate-spin" style={{ animationDuration: '10s' }}>⭐</div>
              <div className="absolute bottom-8 left-12 text-3xl opacity-20">🎁</div>
              <div className="absolute bottom-12 right-6 text-4xl opacity-20 animate-bounce" style={{ animationDuration: '2.5s' }}>🔔</div>
              <div className="absolute top-1/2 left-8 text-2xl opacity-20">❄️</div>
              <div className="absolute top-1/3 right-12 text-2xl opacity-20">🎀</div>
            </div>
          ),
        };
      case 0: // January - Winter
        return {
          bg: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white',
          border: 'border-blue-300',
          headerBg: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600',
          emoji: '❄️',
          image: 'https://images.unsplash.com/photo-1643316423630-feb76a989d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzbm93Zmxha2UlMjBtYWNyb3xlbnwxfHx8fDE3NjY0MzMzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
          decoration: (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-6 left-6 text-4xl opacity-20 animate-pulse">☃️</div>
              <div className="absolute top-12 right-10 text-3xl opacity-20 animate-spin" style={{ animationDuration: '15s' }}>❄️</div>
              <div className="absolute bottom-10 left-8 text-3xl opacity-20">⛄</div>
              <div className="absolute bottom-8 right-8 text-4xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>💎</div>
              <div className="absolute top-1/2 right-6 text-2xl opacity-20">✨</div>
              <div className="absolute top-1/3 left-10 text-2xl opacity-20">🌨️</div>
            </div>
          ),
        };
      case 1: // February - Spring
        return {
          bg: 'bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50',
          border: 'border-pink-300',
          headerBg: 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600',
          emoji: '🌸',
          image: 'https://images.unsplash.com/photo-1684791785613-c1436332e87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBidXR0ZXJmbGllcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzY2NDMzMzUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
          decoration: (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-4 left-8 text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🌺</div>
              <div className="absolute top-10 right-6 text-3xl opacity-20 animate-pulse">🌸</div>
              <div className="absolute bottom-12 left-10 text-3xl opacity-20">🦋</div>
              <div className="absolute bottom-6 right-12 text-4xl opacity-20 animate-bounce" style={{ animationDuration: '2.5s' }}>🌷</div>
              <div className="absolute top-1/2 left-6 text-2xl opacity-20">💫</div>
              <div className="absolute top-1/3 right-10 text-2xl opacity-20">🌼</div>
            </div>
          ),
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-gray-300',
          headerBg: 'bg-gradient-to-r from-pink-500 to-purple-500',
          emoji: '🎉',
          image: '',
          decoration: null,
        };
    }
  };

  const theme = getThemeStyles();

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className={`
          relative w-full max-w-lg ${theme.bg} rounded-3xl shadow-2xl 
          border-4 ${theme.border} overflow-hidden
          animate-[scale-in_0.3s_ease-out]
        `}
        style={{
          maxHeight: '90vh',
        }}
      >
        {/* Decorative background elements */}
        {theme.decoration}

        {/* Header with image */}
        <div className={`${theme.headerBg} p-6 md:p-8 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="text-center">
            {/* Themed image */}
            {theme.image && (
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white/50">
                  <img 
                    src={theme.image} 
                    alt="Decoration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            <div className="text-5xl md:text-6xl mb-3">{theme.emoji}</div>
            <h3 className="text-white mb-1">Selamat!</h3>
            <p className="text-white/90 text-sm md:text-base">
              {formatDate(dayData.date)}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-gray-800 text-center leading-relaxed">
              {dayData.message}
            </p>
          </div>

          {/* Close button */}
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className={`
                px-8 py-3 ${theme.headerBg} text-white rounded-full
                hover:shadow-lg transition-all duration-300
                hover:scale-105 active:scale-95
              `}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
