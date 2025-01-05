import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  state = {
    courses: [],
  };
  async componentDidMount() {
    const response = await axios.get("/");
    console.log("{ response }");
  }
  render() {
    return <>ssss
    <img src="/uploads/picture/picture-1733901054403-h1yafewvibtx.png" alt="" />
    </>;
  }
}
export default Home;
