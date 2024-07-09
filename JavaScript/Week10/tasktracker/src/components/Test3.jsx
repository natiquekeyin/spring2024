import { useState } from "react";

const Test3 = () => {
  let num = [10, 20, 30, 40];
  const [numbers, setNumbers] = useState(num);

  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setNumbers((previousState) => {
            return [...previousState, Math.round(Math.random() * 50, 0)];
          });
        }}
      >
        Change Array
      </button>
    </div>
  );
};

export default Test3;
