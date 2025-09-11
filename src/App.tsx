import { useState } from 'react';
import { DaySelector } from './components/DaySelector';
import { WorkoutDay } from './components/WorkoutDay';
import { WorkoutDay as WorkoutDayType } from './components/WorkoutData';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<WorkoutDayType | null>(null);

  const handleDaySelect = (day: WorkoutDayType) => {
    setSelectedDay(day);
  };

  const handleBackToSelector = () => {
    setSelectedDay(null);
  };

  return (
    <div className="min-h-screen meta-bg">
      {selectedDay ? (
        <WorkoutDay 
          day={selectedDay} 
          onBack={handleBackToSelector} 
        />
      ) : (
        <DaySelector onDaySelect={handleDaySelect} />
      )}
    </div>
  );
}