import { useState } from "react";

const Test1 = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("Alan Smith");

  let x = 10;

  return (
    <>
      <h2>Use State Practice</h2>
      <p>The value of num is {num}</p>
      <p>The name is {name}</p>
      <p>The value of x is {x}</p>
      <button
        onClick={() => {
          setNum(num + 1);
          setName("Bob Smith");
          x = x + 10;
        }}
      >
        Update
      </button>
    </>
  );
};

export default Test1;
