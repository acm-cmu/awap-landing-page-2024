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

// runs only after entire window loads
window.onload = function changeMobileText() {
  // changes past challenge button text if user is on mobile
  if (navigator.userAgent.match(/Mobile/)) {
    document.getElementById("year2022").innerHTML = "2022";
    document.getElementById("year2021").innerHTML = "2021";
    document.getElementById("year2019").innerHTML = "2019";
  }

  // event listener (click) for beginner button content
  var beginnerButton = document.getElementsByClassName("beginner-button")[0];
  beginnerButton.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};
