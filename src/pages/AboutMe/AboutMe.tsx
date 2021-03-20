import React from "react"
import picture from "../../../static/img/Profile.jpg"
import CV from "../../assets/svg/cv.svg"
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import "./AboutMe.scss"

const AboutMe: React.FC = () => {
  return (
    <div className="aboutme">
      <div className="aboutme__profile">
        <img src={picture} alt="profile" />
        <span className="aboutme__profile__name">
          Diego Ballesteros Castellanos
        </span>
        <span className="aboutme__profile__job">Front End Web Developer</span>
        <div className="aboutme__profile__socials">
          <div>
            <CV />
          </div>
          <div>
            <LinkedIn />
          </div>
          <div>
            <Github />
          </div>
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
        <h3>Education</h3>
        <ul>
          <li>Politecnico</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
