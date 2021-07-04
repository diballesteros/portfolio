import React, { forwardRef } from "react"
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
            <li onClick={() => forwardedRef.current.scrollTo(1)}>Home</li>
            <li onClick={() => forwardedRef.current.scrollTo(3)}>Projects</li>
            <li>Resume</li>
            <li onClick={() => forwardedRef.current.scrollTo(4)}>Contact</li>
          </ul>
          {/* <button>darkmode</button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
