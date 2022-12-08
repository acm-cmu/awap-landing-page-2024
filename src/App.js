import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Past from "./components/Past";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Register />
      <Past />
      <Sponsors />
    </div>
  );
}

export default App;
