import React from "react";
import ReactDOM from "react-dom/client"; // برای React 18
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // تم سفارشی

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);