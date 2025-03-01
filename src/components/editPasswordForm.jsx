import React from "react";
import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const EditPasswordForm = ({ userData,handleChange, handleSubmitEditPass }) => {
  return (
    <form onSubmit={handleSubmitEditPass}>
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

export default EditPasswordForm;