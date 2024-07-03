import "./App.css";
import Contact from "./components/Contact";

function App() {
  let name = "Alan Smith";
  return (
    <>
      <div className="App">
        <h1>My First Application - {name}!</h1>
        <p>Learning react is fun!</p>
      </div>
      <div className="App">
        <Contact />
      </div>
    </>
  );
}

export default App;
