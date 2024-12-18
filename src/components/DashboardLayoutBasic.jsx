import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Link, Outlet } from "react-router-dom"; // استفاده از Outlet برای نمایش محتوای صفحه

// کامپوننت ناوبری
const NavigationLinks = () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", p: 2 }}>
    <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit", marginBottom: 8 }}>
      <DashboardIcon />
      <Typography variant="body1" sx={{ ml: 1, display: "inline" }}>
        Dashboard
      </Typography>
    </Link>

    <Link to="/orders" style={{ textDecoration: "none", color: "inherit", marginBottom: 8 }}>
      <ShoppingCartIcon />
      <Typography variant="body1" sx={{ ml: 1, display: "inline" }}>
        Orders
      </Typography>
    </Link>

    <Link to="/login" style={{ textDecoration: "none", color: "inherit", marginBottom: 8 }}>
      <ShoppingCartIcon />
      <Typography variant="body1" sx={{ ml: 1, display: "inline" }}>
        Login
      </Typography>
    </Link>

    <Link to="/reports" style={{ textDecoration: "none", color: "inherit", marginBottom: 8 }}>
      <BarChartIcon />
      <Typography variant="body1" sx={{ ml: 1, display: "inline" }}>
        Reports
      </Typography>
    </Link>

    <Link to="/integrations" style={{ textDecoration: "none", color: "inherit" }}>
      <LayersIcon />
      <Typography variant="body1" sx={{ ml: 1, display: "inline" }}>
        Integrations
      </Typography>
    </Link>
  </Box>
);

function DashboardLayoutBasic(props) {
  const { window } = props;

  return (
    <Box>
      {/* نمایش لینک‌ها */}
      <NavigationLinks />
      {/* اینجا محتوای مسیرهای مختلف نمایش داده می‌شود */}
      <Box sx={{ padding: 3 }}>
        <Outlet /> {/* اینجا محتوای مسیر انتخابی نمایش داده می‌شود */}
      </Box>
    </Box>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
