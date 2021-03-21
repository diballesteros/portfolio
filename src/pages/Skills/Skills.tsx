import React from "react"
import Database from "../../assets/svg/sql-server.svg"
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
          <Programming /> <p>HTML, CSS, SASS</p>
        </div>
        {/* <div>
          <ReactSVG /> <p>React, React Native</p>
        </div> */}
        <div className="skills__container__skill">
          <Test />
          <p>Cypress</p>
        </div>
        <div className="skills__container__skill">
          <Typescript />
          <p>Typescript</p>
        </div>
        <div className="skills__container__skill">
          <Docker />
          <p>Docker</p>
        </div>
        <div className="skills__container__skill">
          <Database />
          <p>SQL Server</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
