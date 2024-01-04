import React, { useState, useCallback, useRef, useEffect } from "react"
import { useTransition, animated } from "@react-spring/web"
import "./Main.css"
export default function App() {
  const ref = useRef([])
  const [items, set] = useState([])

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight : 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#ED1C24" },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "white" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "white" }
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(() => set(["Explore", "Experience", "Enjoy"]), 2000)
    )
    ref.current.push(setTimeout(() => set(["Adventure", "Awaits....."]), 5000))
    ref.current.push(
      setTimeout(() => set(["Discover", "Your", "World"]), 8000)
    )
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className="container">
      <div className="main">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className="transitionsItem"
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
