import { HiCloudUpload } from "react-icons/hi";

const Task = ({ task }) => {
  return (
    <div className="task">
      <HiCloudUpload />
      {task.text}
    </div>
  );
};

export default Task;
