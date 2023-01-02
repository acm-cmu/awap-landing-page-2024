import "../styles/Past.css";
import ReactDOMServer from "react-dom/server";

const year2022 = () => {
  return (
    <div className="row">
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Wifi Rumble - 2022</div>
          <p>
            Wifi Rumble was our largest AWAP event yet, with teams competing
            head-to-head in a seeding round and subsequent double elimination
            bracket for the top prize. Students acted as internet service
            providers to establish cell towers across the impoverished and
            technologically desolate land of Ohhiyo (a fictional place). Players
            vied for power by building roads and cell towers near high
            populations as quickly as possible. Algorithms had to contend with
            terrain of varying building cost and clever opponents who might
            fence them in.
          </p>
        </div>
      </div>
      <div className="row two">
        <div className="past-image">
          <img src="../../past/awap22-image.png" height="300" alt="sponsors" />
        </div>
      </div>
    </div>
  );
};

const year2021 = () => {
  return (
    <div className="row">
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Commute Chaos - 2021</div>
          <p>
            In 2021, AWAP was hosted virtually due to COVID, with a theme based
            on effective transportation management. Each team operated as a
            Transportation Manager whose role was to design a subway network.
            Given knowledge on the passenger load of different stations, teams
            tackled the optimization problem of constructing routes across
            stations with limited resources in order to minimize travel time for
            a simulated day of commuting.
          </p>
        </div>
      </div>
      <div className="row two">
        <div className="past-image">
          <img src="../../past/awap21-image.png" height="300" alt="sponsors" />
        </div>
      </div>
    </div>
  );
};

const year2019 = () => {
  return (
    <div className="row">
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Career Fair Mayhem - 2019</div>
          <p>
            Our 2019 challenge simulated a real-world problem relevant (and
            possibly traumatic) to many students—navigating the chaos of a
            career fair. In this problem, teams were tasked to navigate a map of
            career fair booths and distribute their resume to the companies who
            can provide the most value to their job search. Teams worked to
            create algorithms which would target booths that would maximize
            their profit without wasting too much of their limited time waiting
            in long lines.
          </p>
        </div>
      </div>
      <div className="row two">
        <div className="past-image">
          <img src="../../past/awap19-image.png" height="300" alt="sponsors" />
        </div>
      </div>
    </div>
  );
};

function show2022() {
  document.getElementById("year2022").style.border =
    "5px solid var(--main-color)";
  document.getElementById("year2021").style.border = "0px solid white";
  document.getElementById("year2019").style.border = "0px solid white";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2022());
}

function show2021() {
  document.getElementById("year2022").style.border = "0px solid white";
  document.getElementById("year2021").style.border =
    "5px solid var(--main-color)";
  document.getElementById("year2019").style.border = "0px solid white";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2021());
}

function show2019() {
  document.getElementById("year2022").style.border = "0px solid white";
  document.getElementById("year2021").style.border = "0px solid white";
  document.getElementById("year2019").style.border =
    "5px solid var(--main-color)";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2019());
}

const Past = () => {
  return (
    <div className="past">
      <div className="past-content">
        <div className="section-header">Past Challenges</div>
        <div className="past-buttons">
          <button className="year-button" id="year2022" onClick={show2022}>
            <span className="schedule-header-word">Wifi Rumble</span>
          </button>
          <button className="year-button" id="year2021" onClick={show2021}>
            <span className="schedule-header-word">Commute Chaos</span>
          </button>
          <button className="year-button" id="year2019" onClick={show2019}>
            <span className="schedule-header-word">Career Fair Mayhem</span>
          </button>
        </div>
        <div className="past-info-box" id="past-info">
          {year2022()}
        </div>
        <section>
          <img className="rover" src="../../rover.png" alt="" />
          <div className="line">
            <hr />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Past;
