import React from "react"
import { IParallax } from "@react-spring/parallax"
import CV from "../../assets/svg/cv.svg"
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import DoubleArrow from "../../assets/svg/double-arrow.svg"
import "./Contact.scss"

interface ContactProps {
  forwardedRef: React.MutableRefObject<IParallax>
}

const Contact: React.FC<ContactProps> = ({ forwardedRef }) => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container page">
        <h2>Contact</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </div>
      <footer className="contact__footer">
        <button
          className="contact__footer__return"
          onClick={() => forwardedRef.current.scrollTo(0)}
        >
          <DoubleArrow />
        </button>
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
