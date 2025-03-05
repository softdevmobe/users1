import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
const UserDelete= ({ selectedRow, setMode }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData({
      userName: selectedRow.userName,
      nameFamily: selectedRow.nameFamily,
      imagePath: selectedRow.imagePath,
    });
    console.log("selectedRow Delete : ", selectedRow);
  }, [selectedRow]);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post("/api/users/deleteUser", userData);
      // setUserData({ ...userData, imagePath: response.data.imagePath });
      setErrors({});
      setMode("DEFAULT");
    } catch (err) {
      if (err.name === "ValidationError") {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      } else {
        setErrors([err.message]);
      }
    }
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" gutterBottom>
        آیا مطمئن هستید که می‌خواهید کاربر "{userData.nameFamily}" را حذف کنید؟
      </Typography>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid>
          <Button variant="contained" color="error" onClick={() => handleSubmit(userData)}>
            حذف
          </Button>
        </Grid>
        <Grid>
          <Button variant="outlined" color="primary" onClick={() => setMode("DEFAULT")}>
            لغو
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDelete;
