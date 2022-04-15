import * as React from "react"

const BellSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 24 24"
    aria-labelledby="bellIconTitle"
    stroke="#fff"
    strokeWidth={1.2}
    strokeLinecap="square"
    fill="none"
    color="#fff"
    {...props}
  >
    <title>{"Bell"}</title>
    <path
      strokeLinejoin="round"
      d="M18 9v5c0 2 .667 3.333 2 4H4c1.333-.667 2-2 2-4V9h0a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6Z"
    />
    <path d="M10 18a2 2 0 1 0 4 0" />
  </svg>
)

export default BellSvg