import React from "react";
import { Link } from "react-router-dom";

class Films extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.info?.films) {
      return (
        <>
          <h1>Films is Loading</h1>
        </>
      );
    } else {
      return (
        <div className="container">
          <div className="row justify-content-center mt-5">
            {this.props.info.films?.map((movie) => (
              <div key={movie.id} className="card col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description.substring(0, 75) + "..."}</p>
                  <Link to={`/films/${movie.id}`} className="btn btn-success btn-sm">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Films;
