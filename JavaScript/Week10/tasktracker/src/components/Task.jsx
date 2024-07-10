import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes onClick={() => onDelete(task.id)} style={{ color: "red" }} />
      </h3>
      <h4>{task.day}</h4>
    </div>
  );
};

export default Task;
