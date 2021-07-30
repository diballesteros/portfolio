import React, { useRef, useState } from "react"
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring"
import picture from "../../../static/img/Profile.jpg"
import Framework from "../../assets/svg/framework.svg"
import Database from "../../assets/svg/database.svg"
import Docker from "../../assets/svg/docker.svg"
import Programming from "../../assets/svg/Programming.svg"
import Test from "../../assets/svg/test.svg"
import Typescript from "../../assets/svg/Typescript.svg"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import Header from "../../components/Header/Header"
import "./AboutMe.scss"

const SKILLS = [
  {
    svg: <Programming />,
    h3: "Web Development",
    p: "HTML, CSS, SASS",
  },
  {
    svg: <Framework />,
    h3: "Frameworks",
    p: "React, React Native, AngularJS",
  },
  {
    svg: (
      <Typescript className="aboutme__inner__container__skills__skill__ts" />
    ),
    h3: "Languages",
    p: "JavaScript, TypeScript",
  },
  {
    svg: <Test />,
    h3: "Testing",
    p: "Cypress, React Testing Library",
  },
  {
    svg: <Docker />,
    h3: "DevOps",
    p: "Docker, TFS",
  },
  {
    svg: <Database />,
    h3: "Web Databases",
    p: "SQL Server, NodeJS",
  },
]

const AboutMe: React.FC = () => {
  const profileRef = useRef()
  const profileApi = useSpringRef()
  const skillsApi = useSpringRef()
  const data = useIntersectionObserver(profileRef, { freezeOnceVisible: true })

  const profileStyle = useSpring({
    config: { duration: 750 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: data?.isIntersecting ? 1 : 0,
      left: data?.isIntersecting ? "0px" : "-500px",
    },
    ref: profileApi,
  })

  const transition = useTransition(data?.isIntersecting ? SKILLS : [], {
    config: { duration: 750 },
    ref: skillsApi,
    trail: 400 / SKILLS.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain([profileApi, skillsApi], [0, 0.2, 0.2, 0])

  return (
    <section className="aboutme" id="about">
      <div className="aboutme__inner page">
        <Header title="ABOUT" />
        <div className="aboutme__inner__container" ref={profileRef}>
          <animated.div
            className="aboutme__inner__container__profile"
            style={profileStyle}
          >
            <img src={picture} alt="profile" />
            <h3>Who am I?</h3>
            <p>
              I work at <a href="https://arandasoft.com/">Aranda Software</a> as
              a senior front-end web developer where I help deliver a
              large-scale help desk web application to clients throughout Latin
              America.
            </p>
          </animated.div>
          <div className="aboutme__inner__container__skills">
            {transition((style, item) => (
              <animated.div
                className="aboutme__inner__container__skills__skill"
                style={{ ...style }}
              >
                {item.svg}
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
