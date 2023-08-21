import dynamic from 'next/dynamic';
import DayProgression from './DayProgression';

const Clock = dynamic(() => import('react-live-clock'), {
  ssr: false,
});

export default function DashboardHeader() {
  return (
    <div
      className=' clock-area '
      style={{ width: '100%', height: '50vh', paddingTop: 85 }}
    >
      <div className='clock' style={{ position: 'relative' }}>
        <Clock
          style={{ fontSize: '3vh', fontWeight: 400 }}
          className='dm'
          format={'dddd, MMMM Mo, YYYY'}
          ticking={true}
        />
        <Clock
          style={{ fontSize: '10vh', fontWeight: 800, lineHeight: '10vh' }}
          format={'h:mm A'}
          ticking={true}
        />
        <DayProgression />
      </div>
    </div>
  );
}
