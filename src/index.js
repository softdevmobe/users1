import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // تم سفارشی
import { CssBaseline } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
<CssBaseline/>
<BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
  
);