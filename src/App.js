import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import "./App.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import pfp from "./images/aboutme.png";

function App() {
  const [zoomedImage, setZoomedImage] = useState(false);

  const handleImageClick = (imageSource) => {
    setZoomedImage((prevZoomedImage) =>
      prevZoomedImage === imageSource ? null : imageSource,
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul id="ul-nav">
          <li>
            <Link to="aboutMe" smooth={true} duration={500}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="img-divs-box" smooth={true} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="skills-section" smooth={true} duration={500}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="contact-section" smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </header>

      <Element name="aboutMe">
        <img id="pfp" src={pfp} />

        <p id="aboutMe">
          Hello, I'm Saba Mgeliashvili, a web developer from
          Georgia. <br></br>
          Who am I? <br></br>I am a detail-oriented and dedicated professional
          with a love for coding and problem-solving. My journey into the world
          of web development began with HTML and CSS,After that I studied in two academies,
          the first one was <b>Academy of Digital Industries</b> where I got two certificates in javascript and html & css.
          After that, I continued my studies at the <b>Goal oriented academy</b>,
          where I consolidated what I had learned and acquired new knowledge.{" "}
          <p>you can see some of my projects here</p>
          <a className="github-link" href="https://github.com/sabamgeliashvili" target="_blank">https://github.com/sabamgeliashvili</a><br></br>
          <br></br>
          What do I know? <br></br>I am proficient in: <br></br>
          <ul id="ul-skills">
            <li>
              <b>HTML & CSS:</b>The building blocks of every web page, where I
              bring designs to life.
            </li>
            <li>
              <b>JavaScript:</b>Empowering web interactivity and responsiveness.
            </li>
            <li>
              <b>React:</b>Crafting dynamic and efficient user interfaces.
            </li>
            <li>
              <b>Python (Basic):</b> Exploring the versatility of this powerful
              language.
            </li>
            <li>
              <b>Django (Basic):</b> Dabbling in backend development for a
              holistic understanding.
            </li>

            <li>
              <b>tailwind css:</b> Streamlining styling with utility-first classes, accelerating frontend development through a highly customizable and responsive framework.
            </li>

            <p>also i can work with:</p>
            <li>
              <b>Canva:</b> Unleashing creativity with user-friendly design tools for stunning graphics and visuals.
            </li>
            <li>
              <b>Figma:</b> Collaborative interface design made seamless, fostering teamwork and efficient prototyping.
            </li>
          </ul>
          Beyond Coding... <br></br>I am not just a developer; I am an
          enthusiast. I have a keen interest in leveraging AI technologies, such
          as ChatGPT, to enhance user experiences and provide innovative
          solutions. <br></br>
          Work Ethic <br></br>I pride myself on being hardworking and committed
          to delivering high-quality results. Customer satisfaction is my top
          priority, and I strive to meet and exceed their requirements. I
          believe in the power of effective communication, collaboration, and
          continuous learning to stay at the forefront of the ever-evolving tech
          landscape.<br></br>
          Let's build something amazing together!
        </p>
      </Element>

      <Element name="img-divs-box">
        <div id="img-divs-box">
          <h2>SOME OF MY PROJECTS</h2>
          <div>
            <img
              className={`your-image-class ${zoomedImage === img1 ? "zoomed" : ""}`}
              onClick={() => handleImageClick(img1)}
              src={img1}
            />

            <img
              src={img2}
              className={`your-image-class ${zoomedImage === img2 ? "zoomed" : ""}`}
              onClick={() => handleImageClick(img2)}
            />
          </div>

          <div>
            <img
              src={img3}
              className={`your-image-class ${zoomedImage === img3 ? "zoomed" : ""}`}
              onClick={() => handleImageClick(img3)}
            />
            <img
              src={img4}
              className={`your-image-class ${zoomedImage === img4 ? "zoomed" : ""}`}
              onClick={() => handleImageClick(img4)}
            />
          </div>
        </div>
      </Element>

      <Element name="skills-section">
        <div id="skills-section">
          <h2>THIS IS MY SKILLS</h2>
          <div className="skill">
            <p>HTML & CSS - 85%</p>
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <div className="skill">
            <p>JavaScript - 80%</p>
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <div className="skill">
            <p>React - 80%</p>
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <div className="skill">
            <p>Python - 50%</p>
            <div className="progress-bar" style={{ width: "55%" }}></div>
          </div>
          <div className="skill">
            <p>Django - 40%</p>
            <div className="progress-bar" style={{ width: "40%" }}></div>
          </div>
        </div>
      </Element>

      <div id="contact-section">
        <h2>Contact Me</h2>

        <div className="contact-card">
          <div className="contact-info">
            <div className="contact-item email">
              <p className="cont-info">
                Email:{" "}
                <a href="mailto:sba69717@gmail.com">sba69717@gmail.com</a>
              </p>
            </div>
            <div className="contact-item phone">
              <p className="cont-info">Phone: 557 13 42 35</p>
            </div>
            <div className="contact-item address">
              <p className="cont-info">
                Address: Tbilisi, didi dighomi, vepkhistkaosani N16
              </p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.93685112151!2d44.76312237590003!3d41.78657457125204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446de7337616d1%3A0x371d155b3953c36e!2zMTYg4YOV4YOU4YOk4YOu4YOY4YOh4YOi4YOn4YOQ4YOd4YOh4YOc4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1705836881341!5m2!1ska!2sge"
            width="100%"
            height="400"
            style={{
              border: 0,
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form">
          {/* Your contact form inputs and submit button go here */}
        </div>
      </div>
    </div>
  );
}

export default App;
