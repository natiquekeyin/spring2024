import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Appointment", day: "July 20,2024 at 1pm", reminder: true },
    { id: 2, text: "Meeting", day: "July 21,2024 at 10 am", reminder: false },
    { id: 3, text: "GYM", day: "August 01,2024 at 11 pm", reminder: true },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  // to delete a task

  const deleteTask = (id) => {
    // console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // to toggleReminder true or false

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // to add a task...

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }; //create a new task and embed the id with it
    setTasks([...tasks, newTask]); //take the tasks and embed new task in that array
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker!"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* line 48 means if showAddTask is TRUE then ONLY show <AddTask/> otherwise not.... */}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
