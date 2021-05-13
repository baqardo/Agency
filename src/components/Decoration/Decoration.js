import React from "react"

import "./Decoration.scss"

const Decoration = props => {
  const { size, type, positionClass } = props

  let className = ""

  className += type === "triangle" ? "o-decoration-triangle " : ""
  className += type === "triangle" && size === "small" ? "o-decoration-triangle--small " : ""
  className += type === "square" ? "o-decoration-square " : ""
  className += type === "square" && size === "small" ? "o-decoration-square o-decoration-square--small " : ""

  return (
    <div className={positionClass}>
      <div className={className}></div>
    </div>
  )
}

export default Decoration
