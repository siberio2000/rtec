import React from "react";
import Task from './Task'


const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
       {/* map/loop through each task in state using props*/}
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  )
};

export default Tasks;
