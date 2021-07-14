import { useEffect, useState } from "react"

const useWindowSize = (): number[] => {
  if (typeof window === "undefined") {
    return [0, 0]
  }
  const [size, setSize] = useState([window?.innerHeight, window?.innerWidth])
  useEffect(() => {
    const handleResize = () => {
      setSize([window?.innerHeight, window?.innerWidth])
    }
    window?.addEventListener("resize", handleResize)
    return () => {
      window?.removeEventListener("resize", handleResize)
    }
  }, [])
  return size
}

export default useWindowSize
