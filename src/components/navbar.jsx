import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Avatar, Button, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { HolidayVillage, Home, Menu as MenuIcon, PersonAdd, ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  // باز و بسته کردن کشو
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // باز کردن منوی کاربر
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  // بستن منوی کاربر
  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  // ورود آزمایشی
  const handleLogin = () => {
    setUser({
      name: 'John Doe',
      avatar: '[https://i.pravatar.cc/40](blocked)',
    });
  };

  // خروج از حساب کاربری
  const handleLogout = () => {
    setUser(null);
    setUserMenuAnchorEl(null);
  };

  return (
    <>
      {/* AppBar اصلی */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            MyStore
          </Typography>

          {/* وضعیت کاربر */}
          {user ? (
            <>
              <IconButton onClick={handleUserMenuOpen}>
                <Avatar src={user.avatar} alt={user.name} />
              </IconButton>
              <Menu
                anchorEl={userMenuAnchorEl}
                open={Boolean(userMenuAnchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer برای منوی کشویی */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List style={{ width: 250 }}>
          <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
          <ListItemIcon >
            <Home />
          </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/products" onClick={toggleDrawer(false)}>
          <ListItemIcon >
            <ShoppingCart />
          </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={NavLink} to="/signup" onClick={toggleDrawer(false)}>
          <ListItemIcon >
            <PersonAdd />
          </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;