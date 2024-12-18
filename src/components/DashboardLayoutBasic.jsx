import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useNavigate, Routes, Route } from "react-router-dom"; // مسیریابی
import Login from "./login";
// تعریف NAVIGATION
const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { segment: "login", title: "login", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  { segment: "reports", title: "Reports", icon: <BarChartIcon /> },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
];

// تم دمو
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
});

// محتوای صفحات
const DashboardContent = () => <Typography variant="h4">Welcome to the Dashboard</Typography>;
const OrdersContent = () => <Typography variant="h4">Here are your Orders</Typography>;
const ReportsContent = () => <Typography variant="h4">Analytics and Reports</Typography>;
const IntegrationsContent = () => <Typography variant="h4">Manage Integrations</Typography>;

function DashboardLayoutBasic(props) {
  const { window } = props;

  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme} window={window}>
      <DashboardLayout>
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* تعریف مسیرها */}
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/orders" element={<OrdersContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reports" element={<ReportsContent />} />
            <Route path="/integrations" element={<IntegrationsContent />} />
          </Routes>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
