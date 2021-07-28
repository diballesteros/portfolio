import React, { useRef } from "react"
import { animated, useChain, useSpring, useSpringRef } from "react-spring"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import Header from "../../components/Header/Header"
import Nuzlocke from "../../../static/img/NuzlockeTracker.jpg"
import Github from "../../assets/svg/github.svg"
import "./Projects.scss"

type TProject = {
  description: string
  github?: string
  image: string
  tech: string
  title: string
  website: string
}

const PROJECTS: TProject[] = [
  {
    description: "Track nuzlocke encounters and pokemon",
    github: "https://github.com/diballesteros/nuzlocke",
    image: Nuzlocke,
    tech: "REACT",
    title: "Nuzlocke Tracker",
    website: "https://nuzlocke.netlify.app/",
  },
  {
    description: "Landing page for law firm in Colombia",
    image: Nuzlocke,
    tech: "WORDPRESS",
    title: "Calderon Mejia Abogados",
    website: "https://www.calderonmejiaabogados.com/",
  },
]

const Projects: React.FC = () => {
  const headerRef = useRef()
  const headerApi = useSpringRef()
  const dataHeader = useIntersectionObserver(headerRef, {
    freezeOnceVisible: true,
  })

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: dataHeader?.isIntersecting ? 1 : 0,
      left: dataHeader?.isIntersecting ? "0px" : "-500px",
    },
    ref: headerApi,
  })

  useChain([headerApi], [0, 0.2])

  const handleGithub = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__inner page">
        <Header title="PROJECTS" />
        <animated.h3
          className="projects__inner__description"
          style={headerStyle}
        >
          Here are a few projects I've worked on recently:
        </animated.h3>
        <div className="projects__inner__container" ref={headerRef}>
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
                  {!!proj.github && (
                    <Github onClick={() => handleGithub(proj.github)} />
                  )}
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
