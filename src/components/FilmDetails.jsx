import React from "react";

class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: null,
    };
  }

  getCast = () => {
    let tempCast = [];
    let castIDs = this.state.currentFilm.people.map((char) => char.substring(39)); // makes an array containing the cast IDs
    castIDs?.forEach((castMembers) => {
      // first, look inside the list of cast IDs
      // castMember is a single cast member's ID
      this.props.info.characters.forEach((character) => {
        // then look inside the list of characters
        if (castMembers === character.id) {
          // if a cast id matches a character id, add the character name to the cast array
          tempCast.push(character.name);
        }
      });
    });
    // setCast(tempCast);
    return tempCast; // this will be pushed into when a cast member from the list of characters is found.  this will then be mapped over for our page
  };

  componentDidMount() {
    // when the component first loads, get the data from the api, and set it to state
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.filmid}`)
      .then((res) => res.json())
      .then((currentFilm) => this.setState({ currentFilm }));
  }

  render() {
    if (!this.state.currentFilm) {
      return (
        <>
          <h1>Film Details is Loading</h1>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div key={this.state.currentFilm.id} className="card col-md-6">
                <img className="card-img-top" src={this.state.currentFilm.movie_banner} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">
                    {this.state.currentFilm.title} | {this.state.currentFilm.original_title} | {this.state.currentFilm.original_title_romanised}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Directed by: {this.state.currentFilm.director} | Produced by: {this.state.currentFilm.producer}
                  </h6>
                  <p className="card-text">{this.state.currentFilm.description}</p>
                  {this.state.currentFilm.people.length >= 2 ? <h5>Characters:</h5> : <h5>No cast listed :/</h5>}
                  <ul>{this.state.currentFilm && this.getCast().map((item) => <li key={item}>{item}</li>)}</ul>

                  <footer className="blockquote-footer">
                    <a className="btn btn-success btn-sm" href={this.state.currentFilm.url} target="_blank">
                      View my JSON
                    </a>
                    Release date: {this.state.currentFilm.release_date} Run time:{" "}
                    {Math.floor(this.state.currentFilm.running_time / 60) + " Hrs " + (this.state.currentFilm.running_time % 60) + " Mins"}
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

export default FilmDetails;
