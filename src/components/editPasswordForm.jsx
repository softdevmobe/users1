import React from "react";
import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const EditPasswordForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="رمز عبور فعلی"
            fullWidth
            name="currentPassword"
            type="password"
            size="small"
            margin="normal"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="رمز عبور جدید"
            fullWidth
            name="newPassword"
            type="password"
            size="small"
            margin="normal"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="تکرار رمز عبور جدید"
            fullWidth
            name="confirmNewPassword"
            type="password"
            size="small"
            margin="normal"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
            تغییر رمز عبور
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditPasswordForm;