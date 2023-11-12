import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="links">
      <p>Play</p>
    </Link>
      <Link to="/instructions" className="links">
      <p>Instructions</p>
    </Link>
    </div>
  )
}

export default Navbar