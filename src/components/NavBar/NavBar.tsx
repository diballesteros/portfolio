import React, { useRef, useState } from "react"
import { Link } from "react-scroll"
import { animated, useTransition } from "react-spring"
import useWindowSize from "../../hooks/useWindowSize"
import useOutsidePopup from "../../hooks/useOutsidePopup"
import Hamburger from "../../assets/svg/hamburger.svg"
import "./NavBar.scss"

const NavBar: React.FC = () => {
  const [, width] = useWindowSize()
  const [open, setOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  useOutsidePopup(popupRef, close, filterRef)
  const transitions = useTransition(open, {
    from: { height: 0, opacity: 0 },
    enter: { height: 150, opacity: 1 },
    leave: { height: 0, opacity: 0 },
  })

  return (
    <header className="nav">
      <div className="nav__container">
        {width > 700 ? (
          <nav className="nav__container__actions">
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
                  CONTACTS
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <Hamburger
              className="nav__container__hamburger"
              onClick={() => setOpen(prevState => !prevState)}
            />
            {transitions((styles, item) => {
              return (
                item && (
                  <animated.nav
                    className="nav__container__burgernav"
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
                            CONTACTS
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
        {/* <button>darkmode</button> */}
      </div>
    </header>
  )
}

export default NavBar
