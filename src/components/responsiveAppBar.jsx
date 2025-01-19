import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet } from "react-router-dom";
import AccountDemoSignedIn from "./accountDemoSignedIn";
import TemporaryDrawer from "./temporaryDrawer";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ActiveLastBreadcrumb from "./ActiveLastBreadcrumb";
const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [ setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState(0);
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="جستجو..." inputProps={{ "aria-label": "search" }} />
            </Search>
            <AccountDemoSignedIn />
          </Toolbar>

          <Toolbar disableGutters sx={{ p: 0, mt: -3 }}>
            <TemporaryDrawer />
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
          </Toolbar>
          <Toolbar disableGutters sx={{ p: 0, mt: -3 }}>
            <ActiveLastBreadcrumb />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Box sx={{ width: "100%", bottom: 0  }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="خانه" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        </BottomNavigation>
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
