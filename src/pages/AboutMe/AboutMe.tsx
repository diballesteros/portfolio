import React from "react"
import picture from "../../../static/img/Profile.jpg"
import CV from "../../assets/svg/cv.svg"
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import "./AboutMe.scss"

const AboutMe: React.FC = () => {
  return (
    <section className="aboutme">
      <div className="aboutme__profile">
        <img src={picture} alt="profile" />
        <span className="aboutme__profile__name">
          Diego Ballesteros Castellanos
        </span>
        <span className="aboutme__profile__job">Front End Web Developer</span>
        <div className="aboutme__profile__socials">
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CV />
          </a>
          <a
            href="https://linkedin.com/in/diego-ballesteros-9468a7136"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/diballesteros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
      <div className="aboutme__biography">
        <h2>About me</h2>
        <p>
          I have a degree in systems engineering from the Politecnico
          Grancolombiano. Previously, I worked at Aranda Software as a Senior
          Front End Web developer where I worked on delivering a large-scale
          help desk web application to clients throughout Latin America
        </p>
      </div>
    </section>
  )
}

export default AboutMe
