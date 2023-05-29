import React from "react";
import textEditorImage from "../../assets/images/textEditor.png";
import passwordGeneratorImage from "../../assets/images/passwordGenerator.png";
import weatherDashImage from "../../assets/images/Weather_Dash.png";
import noteTakerImage from "../../assets/images/NoteTaker.png";
import workDayShedulerImage from "../../assets/images/workDaySheduler.png";
import techBlogImage from "../../assets/images/techBlog.png";
import bookSearchEngineImage from "../../assets/images/bookSearchEngine.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={Image}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4></h4>
              <p>
                A MERN application that lets the user log in and create an
                account. The user can receive daily affirmations. The user also
                has the ability to ask questions to receive an answer. The user
                also can receive a lucky number if they want. The user can
                donate money to the website if they want to.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={Image}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4></h4>
              <p>
                A HTMl, CSS, and Javascript application that lets the user.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={Image}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4></h4>
              <p>
                A HTML and CSS application that lets the user.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="/">
                {" "}
                <img
                  src={Image}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4></h4>
              <p>
                A website which offers users to input.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://floating-island-.herokuapp.com/">
                {" "}
                <img
                  src={Image}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4></h4>
              <p>
                A blog that allows the user to view logs into their account. The user can also
                add comments to the blog once they are logged in as well as
                deleting their comments.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;