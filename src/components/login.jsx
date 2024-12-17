import axios from "axios";
import React, { Component } from "react";
import Input from "./input";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", this.state.account);
      const token = response.headers["authorization"];
      localStorage.setItem("token", token);
      
    } catch (error) {
      alert("login failed .");
    }
  };
  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account,
    [input.name] : input.value};
    this.setState({ account });
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="email"
          value={email}
          label="نام کاربری"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          value={password}
          label="کلمه عبور"
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default Login;
