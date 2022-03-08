import React from "react";

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChar: null,
    };
  }

  getTitle = () => {
    let tempShows = []; // this will be the temporary list of movie appearances for the character
    let movieIDs = this.state.currentChar.films.map((film) => film.substring(38)); // gets the id(s) of the movie the character is in
    movieIDs?.forEach((appearance) => {
      // first, look inside the list of movies a character is in
      // appearance is a single film a character is in
      this.props.info.films.forEach((movie) => {
        // then look inside the list of movies
        // movie is a single film
        if (appearance === movie.id) {
          tempShows.push(movie.title);
        }
      });
    });
    return tempShows;
  };

  componentDidMount() {
    // when the component first loads, get the data from the api, and set it to state
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.characterid}`)
      .then((res) => res.json())
      .then((currentChar) => this.setState({ currentChar }));
  }

  render() {
    if (!this.state.currentChar) {
      return (
        <>
          <h1>Character Details is Loading</h1>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div key={this.state.currentChar?.id} className="card col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    {this.state.currentChar?.name}, {this.state.currentChar?.gender}, {this.state.currentChar?.age}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Eye-color: {this.state.currentChar?.eye_color} | Hair-Color: {this.state.currentChar?.hair_color}
                  </h6>
                  <p className="card-text">Appears in: </p>
                  <ul>{this.state.currentChar && this.getTitle().map((item) => <li key={item}>{item}</li>)}</ul>
                  <footer className="blockquote-footer">
                    <a className="btn btn-success btn-sm" href={this.state.currentChar?.url} target="_blank">
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

export default CharacterDetails;
