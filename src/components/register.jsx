import axios from "axios";
import React, { Component, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import { MuiFileInput } from "mui-file-input";
import Avatar, { avatarClasses } from "@mui/material/Avatar";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  const [userData, setUserData] = useState({
    nameFamily: "",
    userName: "",
    password: "",
    imagePath: "",
  });
  const handleChange1 = async (value_) => {
    setImageFile(value_);
    const formData = new FormData();
    formData.append("image", value_);

    try {
      const response = await axios.post("/api/users", formData);
      console.log(response.data);
      setUserData({ ...userData, imagePath: response.data });
      setErrors({});
    } catch (error) {
      setUserData({ ...userData, imagePath: "" });
      const error_ = error.response.data.error;
      const errorMessages = { file: error_ };

      setErrors(errorMessages);

      console.log("error is : ", error_);
    }
  };
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
      .max(50, "نام بزرگتر از 50 نباشد"),
    userName: yup
      .string()
      .required("نام کاریری نمی تواند خالی باشد ")
      .min(3, "نام کاربری کوچکتر از 3 نباشد")
      .max(30, "نام کاربری بزرگتر از 30 نباشد"),
    password: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(8, "کلمه عبور کوچکتر از 8 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد"),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(userData, { abortEarly: false });
      var response = axios.post("/api/users/register", userData);
      console.log("response is ",(await response).data);
      setUserData({ ...userData, imagePath: (await response).data.imagePath });
      setErrors({});
    } catch (err) {
      if (err.name === "ValidationError") {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      }
    }
    return;
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
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
              fullWidth
              name="nameFamily"
              width="100%"
              size="small"
              margin="normal"
              value={userData.nameFamily}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="نام کاربری"
              fullWidth
              name="userName"
              type="userName"
              width="100%"
              size="small"
              margin="normal"
              value={userData.userName}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="رمز عبور"
              fullWidth
              type="password"
              name="password"
              width="100%"
              size="small"
              margin="normal"
              value={userData.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={9}>
            <MuiFileInput
              fullWidth
              value={imageFile}
              onChange={handleChange1}
              placeholder="عکس"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid size={2}>
            <Avatar margin="normal" alt="Remy Sharp" src={userData.imagePath} sx={{ width: 56, height: 56, m: 1.5 }} />
          </Grid>

          <Grid size={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
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
