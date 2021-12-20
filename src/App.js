import Header from "./components/Header";
import Tasks from "./components/TasksBlock";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const title = "TODO LIST APP";

  // setting default global state with the tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Default Task 1",
      date: "15/12/21",
    },
    {
      id: 2,
      text: "Default Task 2",
      date: "16/12/21",
    },
    {
      id: 3,
      text: "Default Task 3",
      date: "21/12/21",
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log("Task added: ", task);
  };

  // Delete task
  const deleteTask = (id) => {
    console.log("Deleted", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title={title} />
      <AddTask addTask={addTask} />
      {/* If tasks length equals zero - show message 'no tasks'  */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        `No tasks`
      )}
    </div>
  );
}

export default App;
