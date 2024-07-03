import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  let name = "Alan Smith";
  return (
    <>
      <div>
        <Header title="To do app" text="Some text here" />
        <Header title="School" text="School app here" />
        <Header title="Attendance App" />
      </div>
    </>
  );
}

export default App;
