import PropTypes from "prop-types";
import Button from "./Button";
import { FaApple } from "react-icons/fa";

function Header({ title }) {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header>
      <h1>
        <FaApple style={{ color: "yellow" }} />
        {title}
      </h1>
      <Button text="Add" color="green" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker!",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
