import "../styles/Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="section-header">Sponsors</div>
      <div className="sponsors-content">
        <div className="row" id="plat-sponsors-container">
          {/* <div className="col sponsors-level">Platinum</div> */}
          <div className="col sponsors sponsors-platinum">
            <a href="https://www.citadel.com">
              <img src="../../sponsors/citadel-logo.png" alt="citadel" />
            </a>
          </div>
        </div>
        <div className="row" id="gold-sponsors-container">
          {/* <div className="col sponsors-level">Gold</div> */}
          <div className="col sponsors sponsors-gold">
            <a href="https://www.microsoft.com/en-us/">
              <img src="../../sponsors/microsoft-logo2.png" alt="microsoft" />
            </a>
            <a className="hrt-logo" href="https://www.hudsonrivertrading.com/">
              <img src="../../sponsors/hrt-logo-clipart.png" alt="hrt" />
            </a>
            <a
              className="rounded-sponsor-img"
              href="https://www.bloomberg.com/"
            >
              <img
                src="../../sponsors/bloomberg-logo-blue.png"
                alt="bloomberg"
              />
            </a>
            <a
              className="rounded-sponsor-img"
              href="https://www.janestreet.com/"
            >
              <img src="../../sponsors/janestreet-logo.png" alt="jane street" />
            </a>
            <a className="rounded-sponsor-img" href="https://www.aptiv.com">
              <img src="../../sponsors/aptiv-logo.png" alt="aptiv" />
            </a>
            <a href="https://about.facebook.com/">
              <img src="../../sponsors/meta-logo.png" alt="meta" />
            </a>
          </div>
        </div>
        <div className="row" id="silver-sponsors-container">
          {/* <div className="col sponsors-level">Silver</div> */}
          <div className="col sponsors sponsors-silver">
            <a href="https://www.regression.gg/">
              <img
                src="../../sponsors/regression-logo.png"
                alt="regression games"
              />
            </a>
            <a href="https://www.oldmissioncapital.com/">
              <img src="../../sponsors/omc-logo.png" alt="omc" />
            </a>
            <a href="https://www.sandia.gov/">
              <img src="../../sponsors/sandia-logo.png" alt="sandia" />
            </a>
            <a href="https://sig.com/">
              <img src="../../sponsors/sig-logo.png" alt="sig" />
            </a>
          </div>
        </div>
        <div className="row" id="bronze-sponsors-container">
          {/* <div className="col sponsors-level">Bronze</div> */}
          <div className="col sponsors sponsors-bronze">
            <a href="https://www.scm-lp.com/">
              <img src="../../sponsors/scm-logo.png" alt="scm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
