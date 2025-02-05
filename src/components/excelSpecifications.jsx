import axios from "axios";
import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import { MuiFileInput } from "mui-file-input";
import Avatar, { avatarClasses } from "@mui/material/Avatar";
import PaginatedTable from "./paginatedTable";
const ExcelSpecifications = () => {
  const [errors, setErrors] = useState({});
  const [excelFile, setExcelFile] = useState(null);

  const handleChange = async (value_) => {
    setExcelFile(value_);
    const formData = new FormData();
    formData.append("excel", value_);
    try {
      const response = await axios.post("/api/excel", formData);
      console.log(response.data);

      setErrors({});
    } catch (error) {
      const error_ = error.response.data.error;
      const errorMessages = { file: error_ };

      setErrors(errorMessages);

      console.log("error is : ", error_);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "50%",
          m: "auto",
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Grid size={9}>
          <MuiFileInput
            fullWidth
            value={excelFile}
            onChange={handleChange}
            placeholder="اکسل"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Box>
    </>
  );
};

export default ExcelSpecifications;
