import axios from "axios";
import React, { Component } from "react";
import Input from "./input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ok submit");
    try {
      const response = await axios.post("/api/users/login", this.state.account);
      const token = response.headers["authorization"];
      localStorage.setItem("token", token);
    } catch (error) {
      alert("login failed .");
    }
  };
  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account, [input.name]: input.value };
    this.setState({ account });
  };

  render() {
    const { email, password } = this.state.account;
    return (
   
         <Box sx={{ display:"flex", flexDirection:"column", padding:"20px" ,margin:"20px",border:"1px solid gray", minHeight: '100vh' ,alignItems:"center",justifyContent:"center" }}>

        <form onSubmit={this.handleSubmit}>
          <Input name="email" value={email} label="نام کاربری" onChange={this.handleChange} />
          <Input name="password" value={password} label="کلمه عبور" onChange={this.handleChange} />
          <Button type="submit" variant="outlined">
            Login
          </Button>
        </form>
        </Box>
        

    );
  }
}

export default Login;
