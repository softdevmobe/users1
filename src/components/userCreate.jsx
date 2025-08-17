import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import * as yup from "yup";
const UserCreate = ({ selectedRow, setMode }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(selectedRow);
  const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    setUserData(selectedRow);
  }, [selectedRow]);
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
      .min(3, "کلمه عبور کوچکتر از 3 نباشد")
      .max(50, "کلمه عبور بزرگتر از 50 نباشد"),
    confirmPassword: yup
      .string()
      .required("کلمه عبور نمی تواند خالی باشد ")
      .oneOf([yup.ref("password")], "رمز عبور جدید و تایید رمز عبور جدید باید یکسان باشد ."),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleChange1 = async (value_) => {
    setImageFile(value_);
    const formData = new FormData();
    formData.append("image", value_);

    try {
      const response = await axios.post("/api/users/uploudImageUser", formData);
      setUserData({ ...userData, imagePath: response.data });
      setErrors({});
    } catch (error) {
      setUserData({ ...userData, imagePath: "" });
      const error_ = error.response.data.error;
      const errorMessages = { file: error_ };
      setErrors(errorMessages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(userData, { abortEarly: false });
      const response = await axios.post("/api/users/insertUser", userData);
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
    <>
      {Object.keys(errors).map((key) => (
        <p key={key} style={{ color: "red", fontSize: 10 }}>
          {errors[key]}
        </p>
      ))}
      <form onSubmit={handleSubmit}>
        <Grid>
          <TextField
            label="نام کاربری"
            fullWidth
            name="userName"
            size="small"
            margin="normal"
            value={userData.userName}
            onChange={handleChange}
          />
          <TextField
            label="نام و نام خانوادگی"
            fullWidth
            name="nameFamily"
            size="small"
            margin="normal"
            value={userData.nameFamily}
            onChange={handleChange}
          />
          <TextField
            label="رمز عبور"
            fullWidth
            name="password"
            type="password"
            size="small"
            margin="normal"
            value={userData.password}
            onChange={handleChange}
          />
          <TextField
            label="تکرار رمز عبور"
            fullWidth
            name="confirmPassword"
            type="password"
            size="small"
            margin="normal"
            value={userData.confirmPassword}
            onChange={handleChange}
          />

          <Grid container spacing={2}>
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
            <Grid size={3}>
              <Avatar
                margin="normal"
                alt="User Avatar"
                src={userData.imagePath}
                sx={{ width: 56, height: 56, m: 1.5 }}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
            ذخیره
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default UserCreate;
