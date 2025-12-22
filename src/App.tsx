import { useState, useEffect } from 'react';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import { CalendarView } from './components/CalendarView';
import { MessageModal } from './components/MessageModal';

export interface DayData {
  date: Date;
  message: string;
  opened: boolean;
}

export default function App() {
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);
  const [openedDays, setOpenedDays] = useState<Set<string>>(new Set());
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Load opened days from localStorage
    const saved = localStorage.getItem('advent-calendar-opened');
    if (saved) {
      setOpenedDays(new Set(JSON.parse(saved)));
    }
  }, []);

  useEffect(() => {
  const hasSeenWelcome = localStorage.getItem('advent-calendar-welcome');
  if (!hasSeenWelcome) {
    setShowWelcome(true);
  }
}, []);

  const handleDayClick = (dayData: DayData) => {
    setSelectedDay(dayData);
    
    // Mark as opened
    const dateKey = dayData.date.toISOString().split('T')[0];
    const newOpenedDays = new Set(openedDays);
    newOpenedDays.add(dateKey);
    setOpenedDays(newOpenedDays);
    localStorage.setItem('advent-calendar-opened', JSON.stringify([...newOpenedDays]));
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const handleCloseWelcome = () => {
  localStorage.setItem('advent-calendar-welcome', 'true');
  setShowWelcome(false);
};

  return (
  <div className="min-h-screen">
    {showWelcome && (
      <WelcomeOverlay onClose={handleCloseWelcome} />
    )}

    <CalendarView 
      onDayClick={handleDayClick}
      openedDays={openedDays}
    />

    {selectedDay && (
      <MessageModal 
        dayData={selectedDay}
        onClose={handleCloseModal}
      />
    )}
  </div>
);

}