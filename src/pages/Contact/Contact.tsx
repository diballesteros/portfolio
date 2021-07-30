import React, { useRef } from "react"
import { animated, useSpring } from "react-spring"
import { Link } from "react-scroll"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import CV from "../../assets/svg/cv.svg"
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import DoubleArrow from "../../assets/svg/double-arrow.svg"
import Header from "../../components/Header/Header"
import "./Contact.scss"

const Contact: React.FC = () => {
  const contactRef = useRef()
  const data = useIntersectionObserver(contactRef, {
    freezeOnceVisible: true,
  })
  const { x } = useSpring({
    from: { x: 0 },
    x: data?.isIntersecting ? 1 : 0,
    config: { duration: 1500 },
  })
  return (
    <section id="contact">
      <div className="contact__inner page">
        <Header title="CONTACT ME" />
        <animated.div
          className="contact__inner__container"
          ref={contactRef}
          style={{
            opacity: x.to({ range: [0, 1], output: [0, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button className="styledButton">SEND</button>
        </animated.div>
      </div>
      <footer className="contact__footer">
        <Link className="contact__footer__return" smooth to="home">
          <DoubleArrow />
        </Link>
        <div className="contact__footer__socials">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vT7k-kw-CXhpQLNw-DfV8SaA6dijH7yCQWKKI8mpYVNupRf7eT3-4bvRB-ICPg46v-cbEbZmsXmL54K/pub"
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
