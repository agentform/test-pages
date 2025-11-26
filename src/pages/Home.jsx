import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <h1>Hello World</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about">
        <button className="nav-button">Go to About Page</button>
      </Link>
    </div>
  )
}

export default Home

