import axiosInstance from "./axiosConfig";
import axios from "axios";
import React, { Component } from "react";
class Logout extends Component {
  async componentDidMount() {
    localStorage.removeItem("token");
    axiosInstance.defaults.headers["authorization"] = null;
  }
  render() {
    return (
      <>
        <div>
          <h1>logging out ...</h1>
        </div>
      </>
    );
  }
}
export default Logout;
