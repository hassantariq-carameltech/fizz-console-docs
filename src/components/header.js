
import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default props => (
  <header style={{ marginBottom: `1.5rem` }}>  
    Fizz Header in layout with all the navigation
    <br/>
    <ListLink to='/'>Home</ListLink>
    <ListLink to='/what-is-fizz'>What is Fizz</ListLink>
    <ListLink to='/overview'>Overview</ListLink>
  </header>
)