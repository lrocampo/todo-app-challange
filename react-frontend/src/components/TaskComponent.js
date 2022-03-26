import React, { useState, useEffect } from 'react'
import TaskService from '../services/TaskService';

function TaskComponent() {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = () => {
        TaskService.getTasks().then((response) => {
            setTask(response.data);
            console.log(response.date);
        })
    }
    return (
        <div className="container">
            <h1 className="text-center">Task List</h1>
            {
                tasks.map(
                    task => 
                    <div key={task.id}>
                        <p>{task.id}</p>
                        <p>{task.description}</p>
                        <p>{task.isDone}</p>
                    </div>
                )
            }
        </div>
    )
}

export default TaskComponent;
