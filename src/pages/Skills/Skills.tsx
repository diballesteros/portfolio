import React from "react"
import Framework from "../../assets/svg/framework.svg"
import Database from "../../assets/svg/database.svg"
import Docker from "../../assets/svg/docker.svg"
import Programming from "../../assets/svg/Programming.svg"
import Test from "../../assets/svg/test.svg"
import Typescript from "../../assets/svg/Typescript.svg"
import "./Skills.scss"

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills__container">
        <div className="skills__container__skill">
          <Programming /> <h3>Web Development</h3>
          <p>HTML, CSS, SASS</p>
        </div>
        <div className="skills__container__skill">
          <Framework /> <h3>Frameworks</h3>
          <p>React, React Native, AngularJS</p>
        </div>
        <div className="skills__container__skill">
          <Typescript />
          <h3>Languages</h3>
          <p>JavaScript, TypeScript</p>
        </div>
        <div className="skills__container__skill">
          <Test />
          <h3>Testing</h3>
          <p>Cypress, React Testing Library</p>
        </div>
        <div className="skills__container__skill">
          <Docker />
          <h3>DevOps</h3>
          <p>Docker, TFS</p>
        </div>
        <div className="skills__container__skill">
          <Database />
          <h3>Databases</h3>
          <p>SQL Server, Oracle</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
