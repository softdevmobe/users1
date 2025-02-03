import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios"; 
import { AuthenticationContext } from "@toolpad/core/AppProvider";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();
  const {user , updateUser } = React.useContext(AuthenticationContext);
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

    setIsLoading(true); 

    try {
      const response = await axios.post("/api/users/login", {
        userName,
        password,
      });

      // const token = response.headers["authorization"];

console.log("response : ",response)


      localStorage.setItem("user", user);
      updateUser({
        user: {
          name: response.data.nameFamily,
          email: response.data.userName,
          image: response.data.imagePath,
        },
      });
      console.log("user is : ",user)
      navigate("/");
    } catch (error) {
      setError(error.response.data); 
    } finally {
      setIsLoading(false); 
    }
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
        ورود
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
