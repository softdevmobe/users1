import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "IranianSans, IranianSansBold",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: '"IranianSans" "IranianSansBold"',
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
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
    MuiTablePagination: {
      styleOverrides: {
        root: {
          direction: "rtl", // برای راست به چپ کردن کل کامپوننت
        },
        // برای تغییر جهت دکمه "بعدی"
        nextIconButton: {
          direction: "rtl",
        },
        // برای تغییر جهت دکمه "قبلی"
        previousIconButton: {
          direction: "rtl",
        },
        // برای تغییر متن "Rows per page"
        labelRowsPerPage: {
          fontFamily: '"IranianSans"', // تغییر فونت
          // margin: "0 16px", // می‌توانید margin هم اضافه کنید
        },
        // برای تغییر متن نمایش داده شده در بخش اطلاعات pagination (مانند "1-10 از 100")
        displayedRows: {
          fontFamily: '"IranianSans"',
        },

      },
    },
  },
});





const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5", // تغییر رنگ پس‌زمینه
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#333", // تغییر رنگ متن
          fontWeight: "bold", // متن پررنگ
        },
      },
    },
  },
});




export default theme;