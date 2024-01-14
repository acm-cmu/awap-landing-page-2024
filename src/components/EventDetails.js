import "../styles/Register.css";
import rover from "../rover.png";

const EventDetails = () => {
  return (
    <div className="register">
      <div className="register-content">
        <div className="section-header">Event Details</div>
        <p className="register-update">
          {/* We're still finalizing the details for AWAP 2024; stay tuned for
          updates! */}
        </p>
        <div className="register-box">
          <p className="register-description">
            Start: January 27, 5 PM @ Rashid Auditorium<br></br>
            End: January 28, 5 PM @ Rashid Auditorium<br></br>
          </p>
          <iframe src="https://discord.com/widget?id=1099870874594705539&theme=dark" width="500" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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
