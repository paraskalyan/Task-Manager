import { XIcon } from 'lucide-react';
import React, { useState } from 'react'

const User = ({ taskList, setTaskList }) => {
    console.log(taskList)
    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState({});
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = () => {
        if (images.length !== Number(currentTask.uploads)) {
            alert(`Please upload exactly ${currentTask.uploads} images`);
            return;
        }
        setTaskList(prevTasks =>
            prevTasks.map(t =>
                t.id === currentTask.id
                    ? { ...t, available: true }
                    : t
            )
        );
        setShowModal(false);


    };

    const startTask = (task) => {
        setShowModal(true);
        setCurrentTask(task);
        setTaskList(prevTasks =>
            prevTasks.map(t =>
                t.id === task.id
                    ? { ...t, available: false }
                    : t
            )
        );

    }

    return (
        <div className='relative '>
            <div className='mt-8 space-y-4 '>
                <h1 className='text-3xl font-bold'>Available Tasks ({taskList.length})</h1>
                {taskList.length === 0 ? <h1 className='text-xl font-semibold'>No available tasks</h1> :

                    taskList.map((task, index) => {
                        return (
                            <div key={index} className=' border border-gray-400 p-4 space-y-2 rounded-lg'>
                                <h1 className='font-semibold text-xl'>{task.name}</h1>
                                <h4>{task.description}</h4>
                                <h4>No. of image uploads allowed: {task.uploads}</h4>
                                {
                                    task.available ?
                                        <button onClick={() => startTask(task)} className='bg-green-600 p-3 rounded-2xl text-white cursor-pointer'>Start Task</button>
                                        :
                                        <h4>Task occupied</h4>
                                }
                            </div>
                        )
                    })
                }
            </div>
            {
                showModal &&
                <div className='h-auto w-[400px] shadow-2xl p-6 rounded-xl bg-[#f2f2f2] absolute top-0 '>
                    <button className='cursor-pointer absolute right-5' onClick={() => setShowModal(false)}>
                        <XIcon className='' />
                    </button>
                    <div className='space-y-3 flex flex-col mt-3'>
                        <h1 className='text-xl font-semibold'>{currentTask.name}</h1>
                        <h5>Please upload exactly {currentTask.uploads} images to submit task</h5>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                        />

                        <p>{images.length} / {currentTask.uploads} images selected</p>

                        <button className='bg-green-600 p-3 rounded-2xl text-white cursor-pointer' onClick={handleSubmit}>Submit Task</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default User