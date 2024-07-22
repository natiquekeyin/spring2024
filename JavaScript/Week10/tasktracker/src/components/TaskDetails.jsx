import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();
      //   console.log(data);
      setTask(data);
      setLoading(false);
    };
    fetchTask();
  });

  return loading ? (
    <h3>loading....</h3>
  ) : (
    <div className="task">
      <p>{pathname}</p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button
        onAdd={() => {
          navigate(-1);
        }}
        text="Go Back"
      />
    </div>
  );
};

export default TaskDetails;
