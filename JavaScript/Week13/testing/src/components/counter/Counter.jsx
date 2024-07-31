import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} tabIndex={1}>
        Increment
      </button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        tabIndex={2}
      />
      <button onClick={() => setCount(amount)} tabIndex={3}>
        Set
      </button>
    </div>
  );
};

export default Counter;
