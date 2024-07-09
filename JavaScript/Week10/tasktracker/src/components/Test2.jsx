import { useState } from "react";

const Test2 = () => {
  const user = {
    name: "Alan Smith",
    age: 20,
    height: 5.11,
    isYoung: true,
  };

  const [person, setPerson] = useState(user);
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.height}</h2>
      <h2>{person.age}</h2>

      <button
        onClick={() => {
          setPerson((previousState) => {
            return {
              ...previousState,
              name: "Bob Smith",
            };
          });
        }}
      >
        Update Person
      </button>
    </>
  );
};

export default Test2;
