import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onAdd={onAdd}
        showAdd={showAdd}
      />
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
