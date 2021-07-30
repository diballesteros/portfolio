import React, { useRef, useState } from "react"
import { animated, useChain, useSpring, useSpringRef } from "react-spring"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import useMediaQuery from "../../hooks/useMediaQuery"
import "./Header.scss"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerRef = useRef()
  const dividerApi = useSpringRef()
  const headerApi = useSpringRef()
  const isMobile = useMediaQuery("(max-width: 600px)")
  const dataHeader = useIntersectionObserver(headerRef, {
    freezeOnceVisible: true,
  })
  console.log(isMobile)

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: !isMobile && dataHeader?.isIntersecting ? 1 : 0,
      left: !isMobile && dataHeader?.isIntersecting ? "0px" : "-500px",
    },
    ref: headerApi,
  })

  const dividerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: !isMobile && dataHeader?.isIntersecting ? 1 : 0,
      left: !isMobile && dataHeader?.isIntersecting ? "0px" : "-500px",
    },
    ref: dividerApi,
  })

  useChain([headerApi, dividerApi], [0, 0.2])

  return (
    <div className="header" ref={headerRef}>
      <animated.h2 style={!isMobile ? headerStyle : undefined}>
        {title}
      </animated.h2>
      <animated.div
        className={`header__underline ${isMobile ? "underlineIsMobile" : ""}`}
        style={!isMobile ? dividerStyle : undefined}
      />
    </div>
  )
}

export default Header
