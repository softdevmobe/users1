import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import * as yup from "yup";
const UserEditPassword = ({ selectedRow, setMode }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(selectedRow);
  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد"),
    newPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد")
      .notOneOf([yup.ref("currentPassword")], "رمز عبور جدید باید با رمزعبور قبلی متفاوت باشد ."),
    confirmNewPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .oneOf([yup.ref("newPassword")], "رمز عبور جدید و تایید رمز عبور جدید باید یکسان باشد ."),
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(userData, { abortEarly: false });
      const response = await axios.post("/api/users/updateUser", userData);
      setUserData({ ...userData, imagePath: response.data.imagePath });
      setErrors({});
      setMode("add");
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
    <form onSubmit={handleSubmit}>
      <Grid container>

          <TextField
            label="رمز عبور فعلی"
            fullWidth
            name="currentPassword"
            type="password"
            size="small"
            margin="normal"
            value={userData.currentPassword}
            onChange={handleChange}
          />
    

          <TextField
            label="رمز عبور جدید"
            fullWidth
            name="newPassword"
            type="password"
            size="small"
            margin="normal"
            value={userData.newPassword}
            onChange={handleChange}
          />

 
          <TextField
            label="تکرار رمز عبور جدید"
            fullWidth
            name="confirmNewPassword"
            type="password"
            size="small"
            margin="normal"
            value={userData.confirmNewPassword}
            onChange={handleChange}
          />


          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
            تغییر رمز عبور
          </Button>

      </Grid>
    </form>
  );
};

export default UserEditPassword;