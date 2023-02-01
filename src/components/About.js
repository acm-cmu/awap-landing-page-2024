import "../styles/About.css";
import FAQButton from "./FAQButton";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="section-header">What's AWAP?</div>
        <div>
          <p className="about-description">
            AWAP is an annual algorithms hackathon where teams of
            students create solutions to an open-ended problem set in society.
            Teams of up to 4 will implement creative and clever solutions and compete to win prizes.
          </p>
        </div>
        <FAQButton key={2} question="Q: What is this year's game about?"
                           answer="This year's game is Mars Makeover, where teams' algorithms will control different robots that have been sent to Mars, on different Mars terrain map, to collect resources and build a base.
                           Teams will compete head to head in 1v1 matches, be the one that dominates the other team to win!."/>
        <FAQButton key={3} question="Q: What if I don't have a team?"
                           answer="Don't worry, we will match you with a team of 3 other people if you request for it!"/>
        <FAQButton key={1} question="Q: Do I need to have experience?"
                    answer="The competition will have two divisions, for experienced and
                    beginner teams, so that each team will have the chance to
                    participate on a level playing field. Teams will code their
                    algorithm in Python, so only basic Python knowledge is necessary to
                    get going."/>
        <FAQButton key={4} question="Q: But what if I'm really really beginner, like really?"
                            answer="We will have mentors available to help you out!"/>
        <FAQButton key={5} question="Q: Will there be prizes or swag?"
                            answer="Yes, we have up to $2000 in cash prizes. Separately we have raffle prizes for everyone. Lastly, everyone will get free food, swag and t-shirts!"/>
        <FAQButton key={7} question="Q: Who runs this amazing event!"
                            answer="AWAP is run by the ACM@CMU chapter, a student organization at Carnegie Mellon University."/> 
        <FAQButton key={6} question="Q: What if I have more questions?"
                            answer="Feel free to email us at acm-exec@cs.cmu.edu"/>
      </div>
    </div>
  );
};

export default About;
