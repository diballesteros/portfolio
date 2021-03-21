import React from "react"
import NavBar from "../components/NavBar/NavBar"
import AboutMe from "./AboutMe/AboutMe"
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import "./index.scss"

const Home: React.FC = () => {
  return (
    <main className="main">
      <NavBar />
      <div className="body">
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

export default Home
