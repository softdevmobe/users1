import axios from "axios";
import React, { Component, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name_, setName_] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !password || !name_) {
      setError("نام کاربری و کلمه عبور را وارد کنید");
      return;
    }
    axios.post("/api/users/register", this.state.user);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 10,
        mb: 10,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        اضافه کردن کاربر
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="نام کاربری"
          type="userName"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="رمز عبور"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<input 
accept=".xlsx, .xls"
id="file"
type="file"
/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "ذخیره..." : "ذخیره"}
        </Button>
      </form>
    </Box>
  );
};

export default Register;
