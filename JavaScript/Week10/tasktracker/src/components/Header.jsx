import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, onAdd, showAdd }) {
  const location = useLocation();
  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onAdd={onAdd}
          showAdd={showAdd}
        />
      )}
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
