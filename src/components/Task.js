import React from "react";
// Import Font awesome fonts
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, deleteTask }) => {
  return (
    /* 
       Display each task taken 
             from state App.js -> TasksBlock -> Task
              via props tasks  -> tasks      -> task
    */
    <div className="task">
      <h3>{task.text} <FaTimes onClick={() => deleteTask(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
