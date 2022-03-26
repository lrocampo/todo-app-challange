import React, { useState, useEffect } from 'react'
import TaskService from '../services/TaskService';

function TaskComponent() {
    const [tasks, setTask] = useState([]);
    const [taskId,setTaskId] = useState([])
    const [popupAddActive, setPopupAddActive] = useState(false);
    const [popupEditActive, setPopupEditActive] = useState(false);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        getTasks();
    }, []);


    const getTasks = () => {
        TaskService.getTasks().then((response) => {
            setTask(response.data);
            console.log(response.data);
        })
    }

    const completeTask = async (task) => {
        await TaskService.completeTask(task).then(task => getTasks());   
    }

    const deleteTask = async (task) => {
        await TaskService.deleteTask(task).then(task => getTasks());  
    }

    const addTask = async (newTask) => {
        await TaskService.addTask(newTask).then(newTask => getTasks())
       
        setPopupAddActive(false);  
        setNewTask("");
    }

    const editTask = async (newTask, taskId) => {
        
        await TaskService.editTask(newTask, taskId).then(newTask => getTasks())

        setPopupEditActive(false);  
        setNewTask("");
    }


    return (
        <div className="container">
            <div className="todos">
            {
                tasks.map(
                    task => (
                            <div className={"todo " + (task.done ? "is-complete" : "")} key={task.id} onClick={() => completeTask(task)}>
                                <div className="checkbox"></div>
                                <div className="text">{task.description}</div>
                                <div className="delete-todo" onClick={(e) => {e.stopPropagation(); deleteTask(task)}}>x</div>
                                <div className="edit-todo" onClick={(e) => {e.stopPropagation(); {setTaskId(task.id)}; setPopupEditActive(true)}}>✎</div>
                            </div>
                            
                    )
                )
            }
        </div>
            <div className="addPopup" onClick={() => {setPopupAddActive(true);}}>+</div>
         {popupAddActive ? (
          <div className="popup">
            <div className="closePopup" onClick={() => setPopupAddActive(false)}>x</div>
            <div className="content">
              <h3>Add task</h3>
              <input type="text" 
              className="add-todo-input" 
              onChange={e => setNewTask(e.target.value)} 
              value={newTask}/>
              <div className="button" onClick={()=>addTask(newTask)}>Create Task</div>
            </div>
          </div>
        ) : '' }

        {popupEditActive ? (
          <div className="popup">
            <div className="closePopup" onClick={() => setPopupEditActive(false)}>x</div>
            <div className="content">
              <h3>Edit task</h3>
              <input type="text" 
              className="add-todo-input" 
              onChange={e => setNewTask(e.target.value)} 
              value={newTask}/>
              <div className="button" onClick={()=>editTask(newTask,taskId)}>Update Task</div>
            </div>
          </div>
        ) : '' }
        </div>
    )
}

export default TaskComponent;
