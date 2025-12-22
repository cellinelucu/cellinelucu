import { DayCard } from './DayCard';
import { DayData } from '../App';
import { getMessagesForDate } from '../utils/messages';

interface CalendarMonthProps {
  year: number;
  month: number;
  theme: 'christmas' | 'winter' | 'spring';
  onDayClick: (dayData: DayData) => void;
  openedDays: Set<string>;
}

export function CalendarMonth({ year, month, theme, onDayClick, openedDays }: CalendarMonthProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = new Date(2025, 11, 23); // December 24, 2025
  const endDate = new Date(2026, 1, 3); // February 3, 2026

  // Get first day of month and total days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Generate calendar grid
  const days = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }

  // Add days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    
    const dateKey = date.toISOString().split('T')[0];
    const isInRange = date >= startDate && date <= endDate;
    const isOpened = openedDays.has(dateKey);
    const isAvailable = date <= today && isInRange;
    const isLocked = date > today && isInRange;
    
    days.push({
      day,
      date,
      isInRange,
      isOpened,
      isAvailable,
      isLocked,
    });
  }

  const handleDayClick = (day: number, date: Date) => {
    const dateKey = date.toISOString().split('T')[0];
    const isInRange = date >= startDate && date <= endDate;
    const isAvailable = date <= today && isInRange;

    if (!isAvailable) return;

    const message = getMessagesForDate(date);
    onDayClick({
      date,
      message,
      opened: openedDays.has(dateKey),
    });
  };

  const weekDays = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  // Theme-based calendar container styles
  const getCalendarThemeStyles = () => {
    switch (theme) {
      case 'christmas':
        return 'bg-gradient-to-br from-red-50/80 to-green-50/80 backdrop-blur-sm border-2 border-red-200';
      case 'winter':
        return 'bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm border-2 border-blue-200';
      case 'spring':
        return 'bg-gradient-to-br from-pink-50/80 to-purple-50/80 backdrop-blur-sm border-2 border-pink-200';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`${getCalendarThemeStyles()} rounded-3xl shadow-2xl p-4 md:p-8`}>
      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-gray-500 text-xs md:text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 md:gap-4">
        {days.map((dayData, index) => (
          <DayCard
            key={index}
            day={dayData?.day}
            date={dayData?.date}
            theme={theme}
            isInRange={dayData?.isInRange ?? false}
            isOpened={dayData?.isOpened ?? false}
            isAvailable={dayData?.isAvailable ?? false}
            isLocked={dayData?.isLocked ?? false}
            onClick={dayData ? () => handleDayClick(dayData.day, dayData.date) : undefined}
          />
        ))}
      </div>
    </div>
  );
}