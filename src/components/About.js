import React from "react";
import profileImage from "../../assets/large/Profile/IMG_1162 (2).PNG";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Muhammad Junaid Siddique. I am currently 44 living in Birmingham. I have a E.M.B.A. in Accounting and Finance with a concentration in
            Commerce studies from the University of Punjab, Lahore, Pakistan and graduated in
            1998. Worked in few banks in different roles and gained customer service experience. I moved to the UK in 2004 for settlement and further gained years of knowledge and experience in Customer service through, hospitality and customer service jobs. But after years of working in customer service and hotel industry, decided to gain personal skills as a web developer. When I am not working, I like to spend my time being active. I like going
            on a day out with my family and friends. I
            love to exercise and go to the gym.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;