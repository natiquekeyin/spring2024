const tasks = [
  { id: 1, text: "Appointment", day: "July 20,2024 at 1pm", reminder: true },
  { id: 2, text: "Meeting", day: "July 21,2024 at 10 am", reminder: false },
  { id: 3, text: "GYM", day: "August 01,2024 at 11 pm", reminder: true },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
