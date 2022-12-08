import "../styles/Home.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="col one">
        <div className="home-content">
          <div className="home-acm">ACM@CMU PRESENTS</div>
          <div className="home-awap">
            Algorithms with a <br></br> Purpose 2023
          </div>
          {/* <div className="home-register-button">
          <a
            className="home-register-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiA-v8H8oi1hh772syQN3LFGJcmjPdB0UWXkf2PDzYFFbn_A/viewform"
          >
            Register Here
          </a>
        </div> */}
          <div className="home-registration-open">
            Registration Opening Soon!
          </div>
        </div>
      </div>
      <div className="col two">
        <div className="home-content">
          <video loop autoPlay muted width="500" height="500">
            <source src="../../home/vid.mp4" type="video/mp4" />
            <p>Your browser doesn't support this video.</p>
          </video>
          <p>AWAP 2022 (Wifi Rumble) Gameplay Demo</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
