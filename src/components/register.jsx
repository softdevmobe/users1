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
        width: "100%",
        margin: "auto",

        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {Object.keys(errors).map((key) => {
        return (
          <Grid>
            {" "}
            <p style={{ color: "red" }}>{errors[key]}</p>{" "}
          </Grid>
        );
      })}

      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <TextField
              label="رمز عبور"
              type="password"
              name="password"
              width="100%"
              size="small"
              variant="standard"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <TextField
              
              label="نام کاربری"
              name="userName"
              type="userName"
              width="100%"
              size="small"
              variant="standard"
              margin="normal"
              value={formData.userName}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Item>3</Item>
          </Grid>
          <Grid size={6}>
            <Item>4</Item>
          </Grid>

          <input accept=".xlsx, .xls" id="file" type="file" />
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
      </form>
    </Box>
  );
};

export default Register;
