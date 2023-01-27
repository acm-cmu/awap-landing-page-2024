import "../styles/Register.css";

const register = () => {
  return (
    <div className="register">
      <div className="register-content">
        <div className="section-header">Registration</div>
        <p className="register-update">
          {/* We're still finalizing the details for AWAP 2023; stay tuned for
          updates! */}
        </p>
        <div className="register-box">
          <p className="register-description">
            Date: 2/17 5 PM - 2/18 5 PM<br></br>
            Location: Rashid/Simmons<br></br>
            Eligibility: CMU students<br></br>
            Registration Deadline: <br></br>
            Team Size: Up to 4
          </p>
        </div>
        <section>
          <div className="line">
            <hr />
          </div>
          <img className="rover" src="../../rover.png" alt="" />
        </section>
      </div>
    </div>
  );
};

export default register;
