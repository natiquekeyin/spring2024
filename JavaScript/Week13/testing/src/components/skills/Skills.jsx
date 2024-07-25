const Skills = ({ skills }) => {
  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
