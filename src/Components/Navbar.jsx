import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <div className="navbar">
          <Link to="/" className="links">
            <p>Play</p>
          </Link>
          <Link to="/instructions" className="links">
            <p>Instructions</p>
          </Link>
        </div>
      ) : (
        <div className="navbar-with-back-button">
          <div className="left-side-navbar">
            <Link to="/">
              <svg
                className="back-button"
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />{" "}
              </svg>
            </Link>
          </div>

          <div className="right-side-navbar">
            <Link to="/" className="links">
              <p>Play</p>
            </Link>
            <Link to="/instructions" className="links">
              <p>Instructions</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
