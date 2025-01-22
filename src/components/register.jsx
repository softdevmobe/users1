import axios from "axios";
import React, { Component, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import * as yup from "yup";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    image: "",
  });
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
        {Object.keys(errors).map((key) => {
          return <p style={{ color: "red" }}>{errors[key]}</p>;
        })}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="نام کاربری"
          name="userName"
          type="userName"
          fullWidth
          margin="normal"
          value={formData.userName}
          onChange={handleChange}
        />

        <TextField
          label="رمز عبور"
          type="password"
          name="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <input accept=".xlsx, .xls" id="file" type="file" />
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
