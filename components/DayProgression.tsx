import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function DayProgression() {
  const [progress, setProgress] = useState(0);

  const getCurrentTime = () => {
    const now = new Date();
    return {
      hour: now.getHours(),
      minute: now.getMinutes(),
    };
  };

  const startHour = useSelector((state: RootState) => state.settings.startHour);
  const endHour = useSelector((state: RootState) => state.settings.endHour);

  useEffect(() => {
    const updateProgress = () => {
      const currentTime = getCurrentTime();

      const elapsedMinutesFromStartOfDay =
        currentTime.hour * 60 + currentTime.minute;
      const startMinutesFromStartOfDay = startHour * 60;
      const endMinutesFromStartOfDay = endHour * 60;

      if (elapsedMinutesFromStartOfDay <= startMinutesFromStartOfDay) {
        setProgress(0);
      } else if (elapsedMinutesFromStartOfDay >= endMinutesFromStartOfDay) {
        setProgress(100);
      } else {
        const elapsedMinutes =
          elapsedMinutesFromStartOfDay - startMinutesFromStartOfDay;
        const totalMinutes =
          endMinutesFromStartOfDay - startMinutesFromStartOfDay;
        setProgress((elapsedMinutes / totalMinutes) * 100);
      }
    };

    updateProgress();

    // Update progress every minute
    const interval = setInterval(updateProgress, 60 * 1000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, [startHour, endHour]);

  return (
    <>
      <h5 className='dm' style={{ position: 'absolute', bottom: 30 }}>
        Days Progress
      </h5>
      <div
        style={{
          height: 20,
          overflow: 'hidden',
          borderRadius: 10,
          background: '#dadada',
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            position: 'absolute',
            left: 0,
            background: '#DA3264',
          }}
        ></div>
      </div>
    </>
  );
}
