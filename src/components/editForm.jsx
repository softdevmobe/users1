import React from "react";
import { TextField, Button } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";

const EditForm = ({ userData, handleChange, handleChange1, imageFile, handleSubmitEdit }) => {
  return (
    <form onSubmit={handleSubmitEdit}>
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
       <Grid container spacing={2} >
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
  );
};

export default EditForm;
