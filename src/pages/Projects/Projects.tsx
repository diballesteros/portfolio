import React from "react"
import Header from "../../components/Header/Header"
import "./Projects.scss"

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner page">
        <Header title="PROJECTS" />
        <p className="projects__inner__description">
          Here are a few projects I've worked on recently:
        </p>
        <div className="projects__inner_container">
          <div>picture one</div>
          <div>picture two</div>
          <div>picture three</div>
        </div>
      </div>
    </section>
  )
}

export default Projects
