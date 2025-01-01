import React, { createContext, useContext, useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios"; // Import Axios
import { useUser } from "./userContext";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const { updateUser } = useUser();

  // Login form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    updateUser({
      name: "4",
      email: "4",
      image: "https://avatars.githubusercontent.com/u/19550456",
    });

    // Basic validation
    if (!email || !password) {
      setError("نام کاربری و کلمه عبور را وارد کنید");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true); // Set loading indicator to true
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      const token = response.headers["authorization"];
      localStorage.setItem("token", token);

      // Handle successful login (redirect, store user data, etc.)
      console.log("Login successful!", response.data); // Example: log response
      // ... your success logic here (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials."); // Display error message
    } finally {
      setIsLoading(false); // Set loading indicator to false
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 10,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        ورود
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="نام کاربری"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="کلمه عبور"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "ورود..." : "ورود"}
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
