import { FaApple } from "react-icons/fa";
function Button({ text, color, onAdd, showAdd }) {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {text}
    </button>
  );
}

export default Button;
