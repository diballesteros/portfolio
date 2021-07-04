import React, { useRef } from "react"
import picture from "../../../static/img/Profile.jpg"
import CV from "../../assets/svg/cv.svg"
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import Framework from "../../assets/svg/framework.svg"
import Database from "../../assets/svg/database.svg"
import Docker from "../../assets/svg/docker.svg"
import Programming from "../../assets/svg/Programming.svg"
import Test from "../../assets/svg/test.svg"
import Typescript from "../../assets/svg/Typescript.svg"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import "./AboutMe.scss"

const AboutMe: React.FC = () => {
  const aboutMeRef = useRef()
  const data = useIntersectionObserver(aboutMeRef, {})

  return (
    <section className="aboutme" id="home">
      <div className="aboutme__inner page" ref={aboutMeRef}>
        <div className="aboutme__inner__header">
          <h2>ABOUT ME</h2>
          <div className="aboutme__inner__header__underline" />
        </div>
        <div className="aboutme__inner__container">
          <div className="aboutme__inner__container__profile">
            <img src={picture} alt="profile" />
            <p>
              I have a degree in systems engineering from the Politecnico
              Grancolombiano. Previously, I worked at Aranda Software as a
              Senior Front End Web developer where I worked on delivering a
              large-scale help desk web application to clients throughout Latin
              America.
            </p>
            <div className="aboutme__inner__container__profile__socials">
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
          <div className="aboutme__inner__container__skills">
            <div className="aboutme__inner__container__skills__skill">
              <Programming /> <h3>Web Development</h3>
              <p>HTML, CSS, SASS</p>
            </div>
            <div className="aboutme__inner__container__skills__skill">
              <Framework /> <h3>Frameworks</h3>
              <p>React, React Native, AngularJS</p>
            </div>
            <div className="aboutme__inner__container__skills__skill">
              <Typescript />
              <h3>Languages</h3>
              <p>JavaScript, TypeScript</p>
            </div>
            <div className="aboutme__inner__container__skills__skill">
              <Test />
              <h3>Testing</h3>
              <p>Cypress, React Testing Library</p>
            </div>
            <div className="aboutme__inner__container__skills__skill">
              <Docker />
              <h3>DevOps</h3>
              <p>Docker, TFS</p>
            </div>
            <div className="aboutme__inner__container__skills__skill">
              <Database />
              <h3>Databases</h3>
              <p>SQL Server, Oracle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
