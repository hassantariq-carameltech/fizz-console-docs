import React from "react"
// import { Link } from "gatsby"
import Header from './header'

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <Header />
    {children}
  </div>
)