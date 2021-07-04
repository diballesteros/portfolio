import React, { useEffect } from "react"
import { IParallax } from "@react-spring/parallax"
import "./NavBar.scss"

interface NavBarProps {
  forwardedRef: React.MutableRefObject<IParallax>
}

const NavBar: React.FC<NavBarProps> = ({ forwardedRef }) => {
  return (
    <nav className="nav">
      <div className="nav__container page">
        <h1>Diego Ballesteros Castellanos</h1>
        <div className="nav__container__actions">
          <ul>
            <li onClick={() => forwardedRef.current.scrollTo(1)}>ABOUT</li>
            <li onClick={() => forwardedRef.current.scrollTo(2)}>PROJECTS</li>
            <li>RESUME</li>
            <li onClick={() => forwardedRef.current.scrollTo(3)}>CONTACT</li>
          </ul>
          {/* <button>darkmode</button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
