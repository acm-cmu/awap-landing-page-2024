import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="section-header">What's AWAP?</div>
        <div>
          <p className="about-description">
            AWAP is an annual algorithmic programming competition where teams of
            students create solutions to problems set in society.
          </p>
          <p>
            The Algorithms hackathon is a technical challenge that attracts a
            cohort with diverse experience levels. Unlike other programming
            competitions, our annual February game involves a problem without a
            clear-cut solution. Participants’ code interacts with other teams,
            and groups compete to optimize their algorithm. In the past, we’ve
            held challenges rooted in fun themes like Career Fair Mayhem (an
            interactive take on career fairs from 2019), Commute Chaos (a
            train-passenger resource allocation problem from 2021), and Wifi
            Rumble (a two-player competition to provide better services to
            populations). This coding challenge is developed by the ACM@CMU
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
