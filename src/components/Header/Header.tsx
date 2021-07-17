import React, { useRef } from "react"
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import "./Header.scss"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerRef = useRef()
  const dividerApi = useSpringRef()
  const headerApi = useSpringRef()
  const dataHeader = useIntersectionObserver(headerRef, {
    freezeOnceVisible: true,
  })

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: dataHeader?.isIntersecting ? 1 : 0,
      left: dataHeader?.isIntersecting ? "0px" : "-500px",
    },
    ref: headerApi,
  })

  const dividerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: dataHeader?.isIntersecting ? 1 : 0,
      left: dataHeader?.isIntersecting ? "0px" : "-500px",
    },
    ref: dividerApi,
  })

  useChain([headerApi, dividerApi], [0, 0.2])

  return (
    <div className="header" ref={headerRef}>
      <animated.h2 style={headerStyle}>{title}</animated.h2>
      <animated.div className="header__underline" style={dividerStyle} />
    </div>
  )
}

export default Header
