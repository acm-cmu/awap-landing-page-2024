import "../styles/About.css";
import FAQButton from "./FAQButton";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="section-header">What's AWAP?</div>
        <div>
          <p className="about-description">
            Algorithms With A Purpose (AWAP) is an annual algorithms hackathon
            where teams of up to 4 students create solutions to an open-ended
            problem set in society and compete to win prizes.
          </p>
        </div>
        <FAQButton
          key={2}
          question="Q: What is this year's game about?"
          answer="This year's theme is Debris Defense! Players will use optimize their towers and resources to protect their base against incoming space debris. The team with the best algorithm wins!"
        />
        <FAQButton
          key={3}
          question="Q: What if I don't have a team yet?"
          answer="No worries! We have a team matching channel on Discord :)"
        />
        <FAQButton
          key={1}
          question="Q: Do I need to have experience?"
          answer="Not necessarily! The competition will have two divisions, experienced and
                    beginner, so that each team will have the chance to
                    participate on a level playing field. Only basic Python knowledge is needed to start developing competitive algorithms 
                    from our game guide."
        />
        <FAQButton
          key={4}
          question="Q: But what if I'm really, really beginner, like really?"
          answer="We will have mentors and office hours available to help you out!"
        />
        <FAQButton
          key={5}
          question="Q: Will there be prizes or swag?"
          answer="Yes, we'll have up to $2000 in cash prizes. We'll also have raffles, free food, swag, and t-shirts!"
        />
        <FAQButton
          key={7}
          question="Q: Who runs this amazing event?!"
          answer="AWAP is run by the ACM@CMU chapter, a student organization at Carnegie Mellon University."
        />
        <FAQButton
          key={6}
          question="Q: What if I have more questions?"
          answer="Email us at acm-exec@cs.cmu.edu, or join our Discord server!"
        />
      </div>
    </div>
  );
};

export default About;
