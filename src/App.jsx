import { useState } from 'react'
import Manager from './components/Manager'
import User from './components/User'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [role, setRole] = useState(null);

  const RoleSelector = () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Select your role</h1>
      <button
        onClick={() => setRole('manager')}
        className="bg-green-600 cursor-pointer w-[100px] p-3 rounded-2xl text-white"
      >
        Manager
      </button>
      <button
        onClick={() => setRole('user')}
        className="bg-blue-600  cursor-pointer w-[100px] p-3 rounded-2xl text-white"
      >
        User
      </button>
    </div>
  );

  if (!role) {
    return <RoleSelector />;
  }

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
      <button
        onClick={() => setRole(null)}
        className="absolute top-4 right-4 bg-gray-500 p-2 rounded-lg text-white"
      >
        Switch Role
      </button>

      {role === 'manager' && <Manager taskList={taskList} setTaskList={setTaskList} />}
      {role === 'user' && <User taskList={taskList} setTaskList={setTaskList} />}
    </div>
  );
}

export default App;
