import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex mt-4 justify-content-center">
        <img src="Studio_Ghibli_Logo.jpg" alt="Studio Gibbles" width={1200} height="auto" />
      </div>
    );
  }
}

export default Home;
