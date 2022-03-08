import React from "react";

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // when the component first loads, get the data from the api, and set it to state
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.characterid}`)
      .then((res) => res.json())
      .then((currentFilm) => this.setState({ currentFilm }));
  }

  render() {
    return <div>this is CharacterDetails</div>;
  }
}

export default CharacterDetails;
