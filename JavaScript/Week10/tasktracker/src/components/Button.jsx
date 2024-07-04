function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}

export default Button;
