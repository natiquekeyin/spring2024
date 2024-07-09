import { FaApple } from "react-icons/fa";
function Button({ text, color, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      <FaApple style={{ color: "red" }} />
      {text}
    </button>
  );
}

export default Button;
