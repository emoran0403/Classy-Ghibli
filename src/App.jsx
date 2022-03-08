import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CharacterDetails from "./components/CharacterDetails";
import Characters from "./components/Characters";
import FilmDetails from "./components/FilmDetails";
import Films from "./components/Films";
import Home from "./components/Home";
import LocationDetails from "./components/LocationDetails";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // initializes state to contain empty arrays, within which the api data will be stored
      films: [],
      characters: [],
      locations: [],
    };
  }

  componentDidMount() {
    // when the component first loads, get the data from the api, and set it to state
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res1) => res1.json())
      .then((data1) => this.setState({ films: data1 }));

    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res2) => res2.json())
      .then((data2) => this.setState({ characters: data2 }));

    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res3) => res3.json())
      .then((data3) => this.setState({ locations: data3 }));
  }

  render() {
    // navbar should always be rendered, so it is outside of Switch
    // react-router-dom v5 has the opening and closing Route tags
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/films">
            <Films info={this.state} />
          </Route>
          <Route exact path="/characters">
            <Characters info={this.state} />
          </Route>
          <Route exact path="/locations">
            <Locations info={this.state} />
          </Route>
          <Route exact path="/films/:filmid">
            <FilmDetails info={this.state} />
          </Route>
          <Route exact path="/characters/:characterid">
            <CharacterDetails info={this.state} />
          </Route>
          <Route exact path="/locations/:locationid">
            <LocationDetails info={this.state} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
