import axios from "axios";
import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import { MuiFileInput } from "mui-file-input";
import BasicSelect from "./basicSelect";
import PaginatedTable from "./paginatedTable";
import HorizontalLinearStepper from "./horizontalLinearStepper";
const ExcelSpecifications = () => {
  const [errors, setErrors] = useState({});
  const [excelFile, setExcelFile] = useState(null);
  const [pathFile, setPathFile] = useState("");
  const [isOk, setIsOk] = useState(0);
  const [result, setResult] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.post("/api/excel/excelSpecifications", pathFile);
      const result_ = response.data.data.map((sheet) => ({
        value: sheet.SheetName,
        index: sheet.Code,
      }));

      setResult(result_);
      setErrors({});
    } catch (error) {
      const error_ = error.response.data.error;
      const errorMessages = { file: error_ };
      setErrors(errorMessages);
    }
  };
  const handleChange = async (value_) => {
    setExcelFile(value_);
    const formData = new FormData();
    formData.append("excel", value_);
    try {
      const response = await axios.post("/api/excel", formData);
      setPathFile({ pathFile: response.data });
      console.log(response.data);

      setErrors({});
      setIsOk(1);
    } catch (error) {
      const error_ = error.response.data.error;
      const errorMessages = { file: error_ };
      setIsOk(0);
      setExcelFile(null);
      setErrors(errorMessages);
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
        <Grid>
          <Grid size={8}>
            <MuiFileInput
              fullWidth
              value={excelFile}
              onChange={handleChange}
              placeholder="اکسل"
              margin="normal"
              variant="outlined"
            />
          </Grid>

          <Grid>
            <HorizontalLinearStepper isOk={isOk} handleClick_={handleClick} />
          </Grid>

          <Grid>
            <BasicSelect result={result} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ExcelSpecifications;
