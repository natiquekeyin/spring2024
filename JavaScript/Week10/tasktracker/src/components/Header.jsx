import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add" color="green" />
      <Button text="Delete" color="red" />
      <Button text="Edit" color="blue" />
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
