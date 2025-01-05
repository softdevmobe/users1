import axios from "axios";
import React, { Component } from "react";
import Input from "./input";

class Register extends Component {
  state = {
    account: {
      name: "",
      email: "",
      password: "",
    },
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/api/users/register", this.state.account);
  };
  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { name, email, password } = this.state.account;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input name="name" value={name} label="name" onChange={this.handleChange} />
        <Input name="email" value={email} label="email" onChange={this.handleChange} />
        <Input name="password" value={password} label="password" onChange={this.handleChange} />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default Register;
