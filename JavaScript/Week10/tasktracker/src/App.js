import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Appointment", day: "July 20,2024 at 1pm", reminder: true },
    { id: 2, text: "Meeting", day: "July 21,2024 at 10 am", reminder: false },
    { id: 3, text: "GYM", day: "August 01,2024 at 11 pm", reminder: true },
  ]);

  // to delete a task

  const deleteTask = (id) => {
    // console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // to toggleReminder true or false

  const toggleReminder = (id) => {
    console.log("doble click working");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker!" />

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
