import React from "react";
import { Link } from "react-router-dom";

class Characters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.info?.characters) {
      return (
        <>
          <h1>Characters is Loading</h1>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="row justify-content-center mt-5">
              {this.props.info.characters?.map((character) => (
                <div key={character.id} className="card col-md-4">
                  <div className="d-flex flex-row justify-content-between card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <Link to={`/characters/${character.id}`} className="btn btn-success btn-sm">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }
}

export default Characters;
