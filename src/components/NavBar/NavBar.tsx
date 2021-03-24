import React from "react"
import { Link } from "react-scroll"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h1>Diego Ballesteros Castellanos</h1>
        <div className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" to="home" smooth spy>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
            </li>
            <li>Resume</li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* <button>darkmode</button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
