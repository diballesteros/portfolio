import React from "react"
import "./Projects.scss"

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner page">
        <h2 className="projects__inner__header">Projects</h2>
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
