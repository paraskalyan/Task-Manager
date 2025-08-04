import React, { useState } from 'react'
import { XIcon } from 'lucide-react'

const Manager = ({ taskList, setTaskList }) => {
    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState({
        name: '',
        description: '',
        uploads: '',
        available: true,
    })
    const [message, setMessage] = useState('');

    const createTask = () => {
        if (!task.name.trim() || !task.description.trim() || task.uploads <= 0) {
            alert('Please fill all fields correctly');
            return;
        }
        const newTask = {
            id: Date.now(),
            name: task.name,
            description: task.description,
            uploads: task.uploads,
            available: true,
        };

        setTaskList([
            ...taskList,
            newTask
        ])

        setTask({
            name: '',
            description: '',
            uploads: '',
            available: true,
        })

        setShowModal(false);

    }
    return (
        <div className={` relative flex flex-col items-center justify-center `}>
            <button onClick={() => setShowModal(true)} className='bg-green-600 p-3 rounded-2xl text-white cursor-pointer'>Create Task</button>
            {
                showModal &&
                <div className='h-auto w-[400px] shadow-2xl p-6 rounded-xl bg-[#f2f2f2] absolute '>
                    <button className='cursor-pointer absolute right-5' onClick={() => setShowModal(false)}>
                        <XIcon className='' />
                    </button>
                    <h2 className='font-semibold text-lg text-gray-700'>Create new task</h2>
                    <div className='space-y-3 flex flex-col mt-3'>

                        <input onChange={(e) => setTask({ ...task, name: e.target.value })} value={task.name} required type='text' className='p-2 ring ring-gray-400 rounded-lg outline-none' placeholder='Enter task name' />
                        <input onChange={(e) => setTask({ ...task, description: e.target.value })} value={task.description} required type='text' className='p-2 ring ring-gray-400 rounded-lg outline-none' placeholder='Enter task description' />
                        <input onChange={(e) => setTask({ ...task, uploads: e.target.value })} value={task.uploads} required type='number' className='p-2 ring ring-gray-400 rounded-lg outline-none' placeholder='Enter no. of uploads' />
                        <button onClick={createTask} className='bg-green-600 p-3 rounded-2xl text-white cursor-pointer'>Create</button>
                        {message && <h6 className='text-green-700 font-medium'>{message}</h6>}
                    </div>

                </div>
            }
            <div className='mt-8 space-y-4'>
                {taskList.length === 0 ? 'No tasks. Create one.' :

                    taskList.map((task) => {
                        return (
                            <div key={task.id} className=' border border-gray-400 p-4 space-y-2 rounded-lg'>
                                <h1 className='font-semibold text-xl'>{task.name}</h1>
                                <h4>{task.description}</h4>
                                <h4>No. of image uploads allowed: {task.uploads}</h4>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Manager