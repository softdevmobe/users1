import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import * as yup from "yup";
const EditForm = ({ selectedRow, handleChange1, imageFile, handleSubmitEdit }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(selectedRow);
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
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userData insaid : ", userData);
    try {
      await schema.validate(userData, { abortEarly: false });
      const response = await axios.post("/api/users/register", userData);
      setUserData({ ...userData, imagePath: response.data.imagePath });
      setErrors({});
    } catch (err) {
      if (err.name === "ValidationError") {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      }
      else{
        setErrors(err.name);
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
          label="نام و نام خانوادگی"
          fullWidth
          name="nameFamily"
          size="small"
          margin="normal"
          value={userData.nameFamily}
          onChange={handleChange}
        />

        <TextField
          label="نام کاربری"
          fullWidth
          name="userName"
          size="small"
          margin="normal"
          value={userData.userName}
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
            <Avatar margin="normal" alt="User Avatar" src={userData.imagePath} sx={{ width: 56, height: 56, m: 1.5 }} />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
          اصلاح
        </Button>
      </Grid>
    </form>
    </>
  );
};

export default EditForm;
