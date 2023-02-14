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
            Start: Friday, 2/17, 5 PM<br></br>
            End: Saturday, 2/18, 5 PM<br></br>
            Location: Rashid/Simmons<br></br>
            Registration Deadline: 2/13<br></br>
            Team Size: Up to 4
          </p>
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
