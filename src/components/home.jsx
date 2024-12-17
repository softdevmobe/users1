import React, { Component } from "react";
// import axios from "axios";
import axiosInstance from "./axiosConfig";
class Home extends Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    // const token = localStorage.getItem("token");

    // const response = await axios.get("/api/courses", {
    //   headers: { Authorization: token },
    // });
    const response = await axiosInstance.get("/api/courses");
    this.setState({ courses: response.data });
  }
  render() {
    return (
      <>
        <div className="row">
          {this.state.courses.map((course) => {
            return (
              <div className="col-4 text-center p-5">
                <h6> {course.Date} </h6>
                <h4>
                  {course.id}
                  {course.Title === null ? " خالی " : course.Title}
                </h4>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
