import { useState } from 'react';
import CreateTask from './CreateTask';

export default function TaskList() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div style={{ width: '30%', height: '40vh' }}>
      {showCreate ? (
        <CreateTask />
      ) : (
        <div className='marker' style={{ width: '100%', height: '100%' }}></div>
      )}
    </div>
  );
}
