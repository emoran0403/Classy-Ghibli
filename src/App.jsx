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
      films: [],
      characters: [],
      locations: [],
    };
  }
  componentDidMount() {
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
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/films/:filmid" component={FilmDetails} />
            <Route exact path="/characters/:characterid" component={CharacterDetails} />
            <Route exact path="/locations/:locationid" component={LocationDetails} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
