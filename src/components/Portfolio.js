import React from "react";
import textEditorImage from "../assets/images/text-editor.png";
import passwordGeneratorImage from "../assets/images/passwordGenerator.png";
import teamProfileGeneratorImage from "../assets/images/team-profile-generator.png";
import noteTakerImage from "../assets/images/note-taker.png";
import workDaySchedularImage from "../assets/images/work-day-schedular.png";
import techBlogImage from "../assets/images/tech-blog.png";
import bookSearchEngineImage from "../assets/images/bookSearchEngine.png";

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
              <a href="https://github.com/junaidmsm/Book-Search-Engine">
                {" "}
                <img
                  src={bookSearchEngineImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="bookSearchEngine"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Book Search Engine</h4>
              <p>
              The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API.
              It's set up to allow users to save book searches to the back end.
              The application is built using Google Books API search engine build with GraphQL API and Apollo Server.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/junaidmsm/Tech-Blog">
                {" "}
                <img
                  src={techBlogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tech-Blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech Blog</h4>
              <p>
              This application is a blog site for developers! where tech fans can share their thoughts, opinions, articles and blog posts.
              Upon coming to the site, the homepage presents with existing blog posts and a navbar to help direct you around the site.
              If you try to navigate away from the homepage, you will be until to until you login and thus will be redirected to the login page.
              You will notice there is also an option to signup from the login page.
              If you signup for an account, you will be automatically logged in.
              Regardless of if you signup or log in, you will be redirected to your dashboard, which is your landing platform for your own posts. If you click on a post in your dashboard, you have the option to update or delete the post. If you click on a post that isn't yours from the homepage, you will be able to view comments and leave one too! Utilzing mySql, Sequelize, and sessions, your login info is stored for 30 minutes while you roam around the site.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/junaidmsm/password-generator">
                {" "}
                <img
                  src={passwordGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PasswordGenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              Using JavaScript and CSS I want to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-taker01-app.herokuapp.com/">
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
              <a href="https://github.com/junaidmsm/OOP-Team-Profile-Generator">
                {" "}
                <img
                  src={teamProfileGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Team-Profile-Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Team Profile Generator</h4>
              <p>
              In this project a Node.js command-line application will be build that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
              This Challenge will combine the use of Jest for running the unit tests and Inquirer for collecting input from the user.
              Which has been presented successfully in the application.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://text-editor0101-app.herokuapp.com/">
                {" "}
                <img
                  src={textEditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text-Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use. The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection.
              This application allows the user to access visited pages even if the application is offline.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/junaidmsm/Work-Day-Scheduler">
                {" "}
                <img
                  src={workDaySchedularImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Day-Schedular"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Schedular</h4>
              <p>
              A simple calendar application that allows a user to save events for each hour of the day.
              This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;