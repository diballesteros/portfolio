import React from "react"
import { Link } from "react-scroll"
import NavBar from "../components/NavBar/NavBar"
import AboutMe from "./AboutMe/AboutMe"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import RightArrow from "../assets/svg/right-arrow.svg"
import "./index.scss"

const Home: React.FC = () => {
  return (
    <main className="main">
      <section className="home" id="home">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="home__navigation">
          <p className="home__navigation__text">
            Hello, I'm{" "}
            <span className="home__navigation__text__highlight">
              Diego Ballesteros.
            </span>{" "}
          </p>
          <p className="home__navigation__text">I'm a front-end developer.</p>
          <Link
            className="home__navigation__button styledButton"
            smooth
            to="about"
          >
            See more
            <RightArrow />
          </Link>
        </div>
      </section>
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home
