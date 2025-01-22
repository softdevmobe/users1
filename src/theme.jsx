import { createTheme } from "@mui/material/styles";
import "./App.css";
const theme = createTheme({
  typography: {
    fontFamily: "IranianSans, IranianSansBold", // دقت کنید که بین نام فونت‌ها کاما قرار دهید
  },
  components: {
    // استایل‌دهی دکمه
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: '"IranianSans" "IranianSansBold"',
        }),
      },
    },
    // استایل‌دهی لینک
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // حذف underline پیش‌فرض لینک
          fontFamily: '"IranianSans" "IranianSansBold"',
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: '"IranianSans"',
        }),
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: '"IranianSans"',
          direction: "rtl",
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          textAlign: "right",
          width: "100%",
          "& .MuiInputLabel-root": { paddingRight: "0 !important", paddingLeft: "0 !important" },
        }),
      },
    },
  },
});

export default theme;
