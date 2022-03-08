import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex justify-content-center mt-3">
        <Link className="btn btn-primary nav-link mx-2 text-light" to={`/`}>
          Home
        </Link>
        <Link className="btn btn-primary nav-link mx-2 text-light" to={`/films`}>
          Films
        </Link>
        <Link className="btn btn-primary nav-link mx-2 text-light" to={`/characters`}>
          Characters
        </Link>
        <Link className="btn btn-primary nav-link mx-2 text-light" to={`/locations`}>
          Locations
        </Link>
      </div>
    );
  }
}

export default Navbar;
