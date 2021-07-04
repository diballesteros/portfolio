import React, { useRef } from "react"
import NavBar from "../components/NavBar/NavBar"
import AboutMe from "./AboutMe/AboutMe"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Skills from "./Skills/Skills"
import RightArrow from "../assets/svg/right-arrow.svg"
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax"
import "./index.scss"

const Home: React.FC = () => {
  const parallax = useRef<IParallax>(null)
  return (
    <main className="main">
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={0}>
          <section className="home">
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
              <p className="home__navigation__text">
                I'm a front end developer.
              </p>
              <div
                className="home__navigation__button"
                onClick={() => parallax.current.scrollTo(1)}
              >
                See more
                <RightArrow />
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ height: 70, maxHeight: 70 }}
        >
          <NavBar forwardedRef={parallax} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}

export default Home
