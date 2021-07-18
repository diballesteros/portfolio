import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import { animated, useTransition } from "react-spring"
import useWindowSize from "../../hooks/useWindowSize"
import useOutsidePopup from "../../hooks/useOutsidePopup"
import Hamburger from "../../assets/svg/hamburger.svg"
import DarkMode from "../../assets/svg/darkmode.svg"
import "./NavBar.scss"

const NavBar: React.FC = () => {
  const [, width] = useWindowSize()
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  useOutsidePopup(popupRef, () => setOpen(false), filterRef)
  const transitions = useTransition(open, {
    from: { height: 0, opacity: 0 },
    enter: { height: 150, opacity: 1 },
    leave: { height: 0, opacity: 0 },
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--title", "#FFFFFF")
      document.documentElement.style.setProperty("--color", "#FFFFFF")
      document.documentElement.style.setProperty("--navbar", "#333333")
      document.documentElement.style.setProperty("--bg", "#212121")
      document.documentElement.style.setProperty("--secondarybg", "#212121")
    } else {
      document.documentElement.style.setProperty("--title", "#444649")
      document.documentElement.style.setProperty("--color", "#616161")
      document.documentElement.style.setProperty("--navbar", "#FFFFFF")
      document.documentElement.style.setProperty("--bg", "#FFFFFF")
      document.documentElement.style.setProperty("--secondarybg", "#F5F5F5")
    }
  }, [darkMode])

  return (
    <header className="nav">
      <div className="nav__container">
        {width > 700 ? (
          <nav className="nav__container__actions">
            <ul>
              <li>
                <Link activeClass="active" smooth spy to="about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="projects">
                  PROJECTS
                </Link>
              </li>
              <li>RESUME</li>
              <li>
                <Link activeClass="active" smooth spy to="contact">
                  CONTACTS
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <div ref={filterRef}>
              <Hamburger
                className="nav__container__hamburger"
                onClick={() => setOpen(prevState => !prevState)}
              />
            </div>
            {transitions((styles, item) => {
              return (
                item && (
                  <animated.nav
                    className="nav__container__burgernav"
                    ref={popupRef}
                    style={styles}
                  >
                    <nav className="nav__container__burgernav__dropdown">
                      <ul>
                        <li>
                          <Link activeClass="active" to="about" smooth spy>
                            ABOUT
                          </Link>
                        </li>
                        <li>
                          <Link activeClass="active" smooth spy to="projects">
                            PROJECTS
                          </Link>
                        </li>
                        <li>RESUME</li>
                        <li>
                          <Link activeClass="active" smooth spy to="contact">
                            CONTACT
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </animated.nav>
                )
              )
            })}
          </>
        )}
        <DarkMode
          className={`nav__container__darkmode ${darkMode && "active"}`}
          onClick={() => setDarkMode(prevState => !prevState)}
        />
      </div>
    </header>
  )
}

export default NavBar
