import "../styles/Home.css";
import awap_logo from "../awap-logo.PNG";

const Homepage = () => {
  return (
    <div className="home">
      {/* <div className="col one">
        <div className="home-content">
          <img src={awap_logo} width="100%" alt="AWAP logo" />
        </div>
      </div> */}
      <div className="col one">
        <div className="home-content">
          <div className="home-acm">ACM@CMU PRESENTS</div>
          <div className="home-awap">Algorithms with a Purpose 2024:</div>
          <div className="home-event-title">BLOONS TOWER DEFENSE</div>
          {/*
          <div className="home-register-button-wrapper">
            <div className="home-register-button">
              <a
                className="home-register-link"
                href="https://forms.gle/A5ypCS5JBwiki4Uw8"
                target="_blank"
              >
                Register Here!
              </a>
            </div>
          </div>            
          */}
          {/*
          <div className="home-registration-open">
            Registration Opening Soon!
          </div> 
          */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
