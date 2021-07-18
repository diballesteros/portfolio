import React from "react"
import Header from "../../components/Header/Header"
import Nuzlocke from "../../../static/img/NuzlockeTracker.jpg"
import Github from "../../assets/svg/github.svg"
import "./Projects.scss"

type TProject = {
  description: string
  github: string
  image: string
  title: string
  website: string
}

const PROJECTS: TProject[] = [
  {
    description: "Track nuzlocke encounters and pokemon",
    github: "https://github.com/diballesteros/nuzlocke",
    image: Nuzlocke,
    title: "Nuzlocke Tracker",
    website: "https://nuzlocke.netlify.app/",
  },
]

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner page">
        <Header title="PROJECTS" />
        <h3 className="projects__inner__description">
          Here are a few projects I've worked on recently:
        </h3>
        <div>tabs</div>
        <div className="projects__inner__container">
          {PROJECTS.map((proj, i) => {
            return (
              <div
                className="projects__inner__container__item"
                key={`project-${i + 1}-${proj.title}`}
              >
                <div className="projects__inner__container__item__details">
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.title}
                  </a>
                  <p>{proj.description}</p>
                  <Github />
                </div>
                <div className="projects__inner__container__item__image">
                  <img alt={proj.title} src={Nuzlocke} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
