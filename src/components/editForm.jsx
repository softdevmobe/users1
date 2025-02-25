import React from "react";
import { TextField, Button } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";

const EditForm = ({ userData, handleChange, handleChange1, imageFile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label="نام و نام خانوادگی"
            fullWidth
            name="nameFamily"
            size="small"
            margin="normal"
            value={userData.nameFamily}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="نام کاربری"
            fullWidth
            name="userName"
            size="small"
            margin="normal"
            value={userData.userName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={9}>
          <MuiFileInput
            fullWidth
            value={imageFile}
            onChange={handleChange1}
            placeholder="عکس"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <Avatar margin="normal" alt="User Avatar" src={userData.imagePath} sx={{ width: 56, height: 56, m: 1.5 }} />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
            اصلاح
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditForm;
