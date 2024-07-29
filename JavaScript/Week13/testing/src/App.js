import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;
