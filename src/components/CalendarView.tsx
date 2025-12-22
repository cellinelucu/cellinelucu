import { useState } from 'react';
import { CalendarMonth } from './CalendarMonth';
import { DayData } from '../App';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface CalendarViewProps {
  onDayClick: (dayData: DayData) => void;
  openedDays: Set<string>;
}

export function CalendarView({ onDayClick, openedDays }: CalendarViewProps) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const months = [
    { name: 'Desember 2025', year: 2025, month: 11, theme: 'christmas' },
    { name: 'Januari 2026', year: 2026, month: 0, theme: 'winter' },
    { name: 'Februari 2026', year: 2026, month: 1, theme: 'spring' },
  ];

  const currentMonth = months[currentMonthIndex];

  // Theme-based backgrounds and colors
  const getThemeStyles = () => {
    switch (currentMonth.theme) {
      case 'christmas':
        return {
          bgGradient: 'bg-gradient-to-br from-red-50 via-green-50 to-red-50',
          titleColor: 'text-red-600',
          iconColor: 'text-red-500',
          buttonBg: 'bg-white/90',
          buttonHover: 'hover:bg-red-50',
          image: 'https://images.unsplash.com/photo-1702925122656-522449ccb966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2hyaXN0bWFzJTIwdHJlZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjY0MzMzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        };
      case 'winter':
        return {
          bgGradient: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100',
          titleColor: 'text-blue-600',
          iconColor: 'text-blue-500',
          buttonBg: 'bg-white/90',
          buttonHover: 'hover:bg-blue-50',
          image: 'https://images.unsplash.com/photo-1610204770823-cc2b899425e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwc25vd21hbiUyMHdpbnRlcnxlbnwxfHx8fDE3NjY0MzMzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        };
      case 'spring':
        return {
          bgGradient: 'bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50',
          titleColor: 'text-pink-600',
          iconColor: 'text-pink-500',
          buttonBg: 'bg-white/90',
          buttonHover: 'hover:bg-pink-50',
          image: 'https://images.unsplash.com/photo-1641989837525-0ba5b6c7651d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBmbG93ZXJzJTIwY2hlcnJ5JTIwYmxvc3NvbXxlbnwxfHx8fDE3NjY0MzMzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        };
      default:
        return {
          bgGradient: 'bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50',
          titleColor: 'text-pink-600',
          iconColor: 'text-pink-500',
          buttonBg: 'bg-white',
          buttonHover: 'hover:bg-pink-50',
          image: '',
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div className={`min-h-screen ${themeStyles.bgGradient} transition-all duration-500`}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header with themed image */}
        <div className="text-center mb-8 md:mb-12">
          {/* Decorative image */}
          {themeStyles.image && (
            <div className="flex justify-center mb-6 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={themeStyles.image} 
                  alt={`${currentMonth.theme} decoration`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorations around image */}
              {currentMonth.theme === 'christmas' && (
                <>
                  <div className="absolute -top-2 -left-2 text-3xl md:text-4xl animate-bounce" style={{ animationDuration: '2s' }}>🎅</div>
                  <div className="absolute -top-2 -right-2 text-3xl md:text-4xl animate-spin" style={{ animationDuration: '10s' }}>⭐</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl md:text-3xl animate-pulse">🎁</div>
                  <div className="absolute -bottom-2 -right-2 text-2xl md:text-3xl animate-bounce" style={{ animationDuration: '1.5s' }}>🔔</div>
                </>
              )}
              {currentMonth.theme === 'winter' && (
                <>
                  <div className="absolute -top-2 -left-2 text-3xl md:text-4xl animate-pulse">❄️</div>
                  <div className="absolute -top-2 -right-2 text-3xl md:text-4xl animate-spin" style={{ animationDuration: '15s' }}>❄️</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl md:text-3xl animate-bounce" style={{ animationDuration: '2.5s' }}>⛄</div>
                  <div className="absolute -bottom-2 -right-2 text-2xl md:text-3xl animate-pulse" style={{ animationDelay: '1s' }}>☃️</div>
                </>
              )}
              {currentMonth.theme === 'spring' && (
                <>
                  <div className="absolute -top-2 -left-2 text-3xl md:text-4xl animate-bounce" style={{ animationDuration: '2s' }}>🌸</div>
                  <div className="absolute -top-2 -right-2 text-3xl md:text-4xl animate-pulse">🌷</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl md:text-3xl">🦋</div>
                  <div className="absolute -bottom-2 -right-2 text-2xl md:text-3xl animate-bounce" style={{ animationDuration: '1.8s' }}>🌼</div>
                </>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className={`w-8 h-8 md:w-10 md:h-10 ${themeStyles.iconColor}`} />
            <h1 className={themeStyles.titleColor}>Kalender Advent Lucu</h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Buka satu kartu setiap hari untuk kejutan spesial! 🎁
          </p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentMonthIndex(Math.max(0, currentMonthIndex - 1))}
            disabled={currentMonthIndex === 0}
            className={`p-2 rounded-full ${themeStyles.buttonBg} shadow-md disabled:opacity-30 disabled:cursor-not-allowed ${themeStyles.buttonHover} transition-colors`}
            aria-label="Previous month"
          >
            <ChevronLeft className={`w-6 h-6 ${themeStyles.iconColor}`} />
          </button>
          
          <div className="min-w-[200px] text-center">
            <h2 className="text-gray-800">{currentMonth.name}</h2>
          </div>

          <button
            onClick={() => setCurrentMonthIndex(Math.min(months.length - 1, currentMonthIndex + 1))}
            disabled={currentMonthIndex === months.length - 1}
            className={`p-2 rounded-full ${themeStyles.buttonBg} shadow-md disabled:opacity-30 disabled:cursor-not-allowed ${themeStyles.buttonHover} transition-colors`}
            aria-label="Next month"
          >
            <ChevronRight className={`w-6 h-6 ${themeStyles.iconColor}`} />
          </button>
        </div>

        {/* Calendar Month */}
        <CalendarMonth
          year={currentMonth.year}
          month={currentMonth.month}
          theme={currentMonth.theme as 'christmas' | 'winter' | 'spring'}
          onDayClick={onDayClick}
          openedDays={openedDays}
        />
      </div>
    </div>
  );
}