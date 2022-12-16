import "../styles/Past.css";
import ReactDOMServer from "react-dom/server";

const year2022 = () => {
  return (
    <div className="row">
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Wifi Rumble</div>
          <p>
            Two competing companies have been contracted to provide wifi service
            to a new population. Players control one of these companies to
            efficiently gain the loyalty and business of these new customers,
            while having to contend with another player.
          </p>
        </div>
      </div>
      <div className="row two">
        <div className="past-image">
          <img src="../../past/awap22-image.png" height="400" alt="sponsors" />
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
          <div className="past-title">Commute Chaos</div>
          <p>
            Players have to design a subway system to efficiently transport
            riders to their destinations, while also keeping construction costs
            low.
          </p>
        </div>
      </div>
      <div className="row two">
        <div className="past-image">
          <img src="../../past/awap21-image.png" height="400" alt="sponsors" />
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
          <div className="past-title">Career Fair Mayhem</div>
          <p>
            Players must navigate a challenging, yet rewarding world: the Career
            Fair. They must manage their time efficiently in order to maximize
            their gains from each booth.
          </p>
        </div>
      </div>
      <div className="row two">
        <div className="past-image">
          <img src="../../past/awap19-image.png" height="400" alt="sponsors" />
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
        <div className="section-header">Past Years</div>
        <div className="past-buttons">
          <button className="year-button" id="year2022" onClick={show2022}>
            <span className="schedule-header-word">2022</span>
          </button>
          <button className="year-button" id="year2021" onClick={show2021}>
            <span className="schedule-header-word">2021</span>
          </button>
          <button className="year-button" id="year2019" onClick={show2019}>
            <span className="schedule-header-word">2019</span>
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
