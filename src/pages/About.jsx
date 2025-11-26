import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This is the about page. You navigated here using hash routing!</p>
      <Link to="/">
        <button className="nav-button">Go Back Home</button>
      </Link>
    </div>
  )
}

export default About

