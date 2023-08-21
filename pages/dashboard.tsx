import CreateTask from '@/components/CreateTask';
import DashboardHeader from '@/components/DashboardHeader';
import DayProgression from '@/components/DayProgression';
import TaskList from '@/components/TaskList';

export default function Dashboard() {
  return (
    <div
      className=''
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DashboardHeader />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <TaskList />
      </div>
    </div>
  );
}
