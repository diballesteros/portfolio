import React from "react"
import "./Projects.scss"

const Projects: React.FC = () => {
  return (
    <section className="page projects" id="projects">
      <h2 className="projects__header">Projects</h2>
      <p className="projects__description">
        Here are a few portfolio projects I've worked on recently.
      </p>
      <div className="projects__container">
        <div>picture one</div>
        <div>picture two</div>
        <div>picture three</div>
      </div>
    </section>
  )
}

export default Projects
