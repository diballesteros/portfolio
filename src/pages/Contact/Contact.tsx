import React, { useRef } from "react"
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring"
import { Link } from "react-scroll"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import CV from "../../assets/svg/cv.svg"
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import DoubleArrow from "../../assets/svg/double-arrow.svg"
import Header from "../../components/Header/Header"
import "./Contact.scss"

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner page">
        <Header title="CONTACT" />
        <div className="contact__inner__container">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </div>
      </div>
      <footer className="contact__footer">
        <Link className="contact__footer__return" smooth to="home">
          <DoubleArrow />
        </Link>
        <div className="contact__footer__socials">
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CV />
          </a>
          <a
            href="https://linkedin.com/in/diego-ballesteros-9468a7136"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/diballesteros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
        <span>
          DIEGO BALLESTEROS <span>©2021</span>
        </span>
      </footer>
    </section>
  )
}

export default Contact
