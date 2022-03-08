import React from "react";

class LocationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLoc: null,
    };
  }

  componentDidMount() {
    // when the component first loads, get the data from the api, and set it to state
    fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.locationid}`)
      .then((res) => res.json())
      .then((currentLoc) => this.setState({ currentLoc }));
  }

  getResidents = () => {
    const residentIDs = this.state.currentLoc?.residents.map((person) => person.substring(39)); // this is an array of residents' IDs
    let tempResidents = []; // this will contain the residents' names, which will be pushed into from the getResidents function, and will be used to map over later to produce a JSX list
    residentIDs?.forEach((resident) => {
      // first, look at each resident
      this.props.info.characters.forEach((character) => {
        // then look at each character
        if (resident === character.id) {
          // if the IDs match, add the character's name to the residents array
          tempResidents.push(character.name);
        }
      });
    });
    return tempResidents;
  };

  getShows = () => {
    const showIDs = this.state.currentLoc?.films.map((film) => film.substring(38)); // this is the array of film IDs
    let tempShows = []; // this will contain the show titles, which will be pushed into from the getShows function, and will be used to map over later to produce a JSX list
    showIDs?.forEach((show) => {
      // first, look at each show
      this.props.info.films.forEach((movie) => {
        // then look at each movie
        if (show === movie.id) {
          // if the show id from the location matches a movie's id, add the movie's title to the shows array
          tempShows.push(movie.title);
        }
      });
    });
    return tempShows;
  };

  render() {
    if (!this.state.currentLoc) {
      return (
        <>
          <h1>Location Details is Loading</h1>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div key={this.state.currentLoc?.id} className="card col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{this.state.currentLoc?.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Climate: {this.state.currentLoc?.climate} | Terrain: {this.state.currentLoc?.terrain} | Surface Water: {this.state.currentLoc?.surface_water}
                  </h6>

                  <p className="card-text">As seen in: </p>
                  <ul>{this.state.currentLoc ? this.getShows().map((item) => <li key={item}>{item}</li>) : <li>No Data Found</li>}</ul>

                  <p className="card-text">Residents: </p>
                  <ul>{this.state.currentLoc.residents.length >= 2 ? this.getResidents().map((item) => <li key={item}>{item}</li>) : <li>No Data Found</li>}</ul>

                  <footer className="blockquote-footer">
                    <a className="btn btn-success btn-sm" href={this.state.currentLoc?.url} target="_blank">
                      View my JSON
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default LocationDetails;
