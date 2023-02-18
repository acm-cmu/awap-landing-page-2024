import "../styles/Register.css";
import rover from "../rover.png";

const EventDetails = () => {
  return (
    <div className="register">
      <div className="register-content">
        <div className="section-header">Event Details</div>
        <p className="register-update">
          {/* We're still finalizing the details for AWAP 2023; stay tuned for
          updates! */}
        </p>
        <div className="register-box">
          <p className="register-description">
            Start: Now - Happy hacking!<br></br>
            End: Today, 5 PM @ TEP 1101 Simmons Auditorium!<br></br>
          </p>
          <iframe
            src="https://discord.com/widget?id=1074365724400832532&theme=dark"
            width="102%"
            height="75%"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <section>
          <div className="line">
            <hr />
          </div>
          <img className="rover" src={rover} alt="" />
        </section>
      </div>
    </div>
  );
};

export default EventDetails;
