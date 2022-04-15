import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={350}
    viewBox="0 0 24 24"
    width={350}
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
  </svg>
)

export default SvgComponent