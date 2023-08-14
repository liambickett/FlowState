import Clock from 'react-live-clock';

export default function DashboardHeader() {
  return (
    <div
      className=' clock-area'
      style={{ width: '100%', height: '50vh', paddingTop: 85 }}
    >
      <div className='clock'>
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
      </div>
    </div>
  );
}
