import "../styles/Register.css";

const register = () => {
  return (
    <div className="register">
      <div className="register-content">
        <div className="section-header">Registration</div>
        <p className="register-update">
          We're still finalizing the details for AWAP 2023; stay tuned for
          updates!
        </p>
        <div className="register-box">
          <p className="register-description">
            Date: 2/17 - 2/18 <br></br>
            Location: Rashid/Simmons (Tentative) <br></br>
            Format: TBD <br></br>
            Prize money: TBD <br></br>
            Registration opens: TBD <br></br>
            Eligibility: CMU students
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
