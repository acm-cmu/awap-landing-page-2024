import "../styles/Sponsors.css";
import citadel_logo from "../sponsors/citadel-logo.png";
import aptiv_logo from "../sponsors/aptiv-logo.png";
import bloomberg_logo from "../sponsors/bloomberg-logo-blue.png";
import hrt_logo from "../sponsors/hrt-logo-clipart.png";
import janestreet_logo from "../sponsors/janestreet-logo.png";
import microsoft_logo from "../sponsors/microsoft-logo2.png";
import meta_logo from "../sponsors/meta-logo.png";
import regression_logo from "../sponsors/regression-logo.png";
import omc_logo from "../sponsors/omc-logo.png";
import sandia_logo from "../sponsors/sandia-logo.png";
import scm_logo from "../sponsors/scm-logo.png";
import sig_logo from "../sponsors/sig-logo.png";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="section-header">Sponsors</div>
      <div className="sponsors-content">
        <div className="row" id="plat-sponsors-container">
          {/* <div className="col sponsors-level">Platinum</div> */}
          <div className="col sponsors sponsors-platinum">
            <a href="https://www.citadel.com">
              <img src={citadel_logo} alt="citadel" />
            </a>
          </div>
        </div>
        <div className="row" id="gold-sponsors-container">
          {/* <div className="col sponsors-level">Gold</div> */}
          <div className="col sponsors sponsors-gold">
            <a href="https://www.microsoft.com/en-us/">
              <img src={microsoft_logo} alt="microsoft" />
            </a>
            <a className="hrt-logo" href="https://www.hudsonrivertrading.com/">
              <img src={hrt_logo} alt="hudson river trading" />
            </a>
            <a
              className="rounded-sponsor-img"
              href="https://www.bloomberg.com/"
            >
              <img src={bloomberg_logo} alt="bloomberg" />
            </a>
            <a
              className="rounded-sponsor-img"
              href="https://www.janestreet.com/"
            >
              <img src={janestreet_logo} alt="jane street" />
            </a>
            <a className="rounded-sponsor-img" href="https://www.aptiv.com">
                <img src = {aptiv_logo} alt = "aptiv" />
            </a>
            <a href="https://about.facebook.com/">
              <img src={meta_logo} alt="meta" />
            </a>
          </div>
        </div>
        <div className="row" id="silver-sponsors-container">
          {/* <div className="col sponsors-level">Silver</div> */}
          <div className="col sponsors sponsors-silver">
            <a href="https://www.regression.gg/">
              <img src={regression_logo} alt="regression" />
            </a>
            <a href="https://www.oldmissioncapital.com/">
              <img src={omc_logo} alt="old mission capital" />
            </a>
            <a href="https://www.sandia.gov/">
              <img src={sandia_logo} alt="sandia" />
            </a>
            <a href="https://sig.com/">
              <img src={sig_logo} alt="sig" />
            </a>
          </div>
        </div>
        <div className="row" id="bronze-sponsors-container">
          {/* <div className="col sponsors-level">Bronze</div> */}
          <div className="col sponsors sponsors-bronze">
            <a href="https://www.scm-lp.com/">
              <img src={scm_logo} alt="scm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
