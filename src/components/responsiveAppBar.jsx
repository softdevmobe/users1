import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../image/logo192.png";
import { Outlet } from "react-router-dom";
import AccountDemoSignedIn from "./accountDemoSignedIn";
import TemporaryDrawer from "./temporaryDrawer";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ onButtonclick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.dark, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "100%",
    },
    direction: "rtl",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 1),
    height: "100%",

    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.palette.warning.light,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  return (
    <>
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ p: 0 }}>
          <AccountDemoSignedIn />
        
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="جستجو..." inputProps={{ "aria-label": "search" }} />
          </Search>
          
        </Toolbar>
        <Toolbar disableGutters sx={{ p: 0, mt: -3 }}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              // color: "inherit",
              textDecoration: "none",
            }}
          >
            لوگو
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO1
          </Typography>
          {/* <MenuIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} onClick={onButtonclick} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "black", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>
          <TemporaryDrawer/>
        </Toolbar>
       
      </Container>
    </AppBar>
     <Outlet /> 
     </>
  );
}
export default ResponsiveAppBar;
