import PropTypes from "prop-types";
import Contact from "./Contact";

function Header({ title, text }) {
  return (
    <div className="App">
      <h1 style={headingStyle}>{title}</h1>
      <p style={headingStyle}>{text}</p>
      <Contact />
    </div>
  );
}

Header.defaultProps = {
  title: "Default Title",
  text: "Default text here",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const headingStyle = { color: "red", backgroundColor: "black" };
export default Header;
