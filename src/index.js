import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom"; // افزودن BrowserRouter
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // تم سفارشی

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/* افزودن BrowserRouter به عنوان والد */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);