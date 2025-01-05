import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  state = {
    courses: [],
  };
  async componentDidMount() {
    const response = await axios.post("/");
    console.log({response});
  }
  render() {
    return (
      <>
ssss
      </>
    );
  }
}
export default Home;
