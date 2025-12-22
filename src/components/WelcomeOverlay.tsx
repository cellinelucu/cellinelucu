import { useEffect } from 'react';

interface WelcomeOverlayProps {
  onClose: () => void;
}

export function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-scale-in overflow-hidden">
        
        {/* Sparkle animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-6 text-2xl animate-bounce">✨</div>
          <div className="absolute top-10 right-8 text-xl animate-pulse">🎄</div>
          <div className="absolute bottom-8 left-10 text-xl animate-bounce">🎁</div>
          <div className="absolute bottom-4 right-6 text-2xl animate-pulse">❄️</div>
        </div>

        <div className="relative z-10">
          <div className="text-4xl mb-4">👋</div>
          <h2 className="mb-2">Hai kamu!</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kalender ini cuma boleh dibuka  
            <span className="font-semibold"> satu hari satu kejutan </span> ya 😆  
            <br />
            Jangan curang~
          </p>

          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all hover:scale-105"
          >
            Okeee 💖
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.7);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
