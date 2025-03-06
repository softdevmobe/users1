import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!userName || !password) {
      setError("نام کاربری و کلمه عبور را وارد کنید");
      return;
    }
    const pattern = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    if (!pattern.test(userName)) {
      setError("Please enter a valid userName");
      return;
    }
    try {
      const response = await axios.post("/api/users/login", {
        userName,
        password,
      });

      const user = {
        name: response.data.nameFamily,
        email: response.data.userName,
        image: response.data.imagePath,
      };

      localStorage.setItem("user", JSON.stringify({ user }));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    } finally {
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 4,
        mb: 10,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="div" gutterBottom>
        <LoginIcon />
      </Typography>
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          label="نام کاربری"
          type="userName"
          fullWidth
          margin="normal"
          size="small"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="کلمه عبور"
          type="password"
          fullWidth
          margin="normal"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          ورود
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
