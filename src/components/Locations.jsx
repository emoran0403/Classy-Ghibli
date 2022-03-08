import React from "react";
import { Link } from "react-router-dom";

class Locations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.info?.locations) {
      return (
        <>
          <h1>Locations is Loading</h1>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="row justify-content-center mt-5">
              {this.props.info?.locations.map((locale) => (
                <div key={locale.id} className="card col-md-4">
                  <div className="d-flex flex-row justify-content-between card-body">
                    <h5 className="card-title">{locale.name}</h5>
                    <Link to={`/locations/${locale.id}`} className="btn btn-success btn-sm">
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

export default Locations;
