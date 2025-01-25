import axios from "axios";
import React, { Component, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    nameFamily:"",
    userName: "",
    password: "",
    image: "",
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const schema = yup.object().shape({
    nameFamily: yup
      .string()
      .required("نام نمی تواند خالی باشد ")
      .min(3, "نام کوچکتر از 3 نباشد")
      .max(20, "نام بزرگتر از 20 نباشد"),
    userName: yup
      .string()
      .required("نام کاریری نمی تواند خالی باشد ")
      .min(3, "نام کاربری کوچکتر از 3 نباشد")
      .max(10, "نام کاربری بزرگتر از 10 نباشد"),
    password: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(10, "کلمه عبور بزرگتر از 10 نباشد"),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (err) {
      if (err.name === "ValidationError") {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
        console.log(errors);
      }
    }
    return;

    axios.post("/api/users/register", this.state.user);
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        textAlign:"center"
      }}
    >
      {Object.keys(errors).map((key) => {
        return (
          <Grid>
            {" "}
            <p style={{ color: "red", fontSize: 10 }}>{errors[key]}</p>{" "}
          </Grid>
        );
      })}

      <form onSubmit={handleSubmit}>
        <Grid container>
        <Grid size={12}>
            <TextField
              label="نام و نام خانوادگی"
              name="nameFamily"
              width="100%"
              size="small"
 
              margin="normal"
              value={formData.nameFamily}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={12} >
            <TextField
              label="نام کاربری"
              name="userName"
              type="userName"
              width="100%"
              size="small"
 
              margin="normal"
              value={formData.userName}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="رمز عبور"
              type="password"
              name="password"
              width="100%"
              size="small"
      
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          

          <Grid size={12}>
          <input accept=".xlsx, .xls" id="file" type="file" />
          </Grid>

          <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "ذخیره..." : "ذخیره"}
          </Button>
          </Grid>

          
        </Grid>
      </form>
    </Box>
  );
};

export default Register;
