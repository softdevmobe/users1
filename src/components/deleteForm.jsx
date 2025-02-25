import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const DeleteForm = ({ row, handleDelete, onCancel }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" gutterBottom>
        آیا مطمئن هستید که می‌خواهید کاربر "{row.nameFamily}" را حذف کنید؟
      </Typography>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <Button variant="contained" color="error" onClick={() => handleDelete(row)}>
            حذف
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={onCancel}>
            لغو
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeleteForm;