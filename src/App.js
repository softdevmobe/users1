import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";
import Typography from "@mui/material/Typography";
import  Login  from "./components/login";

// محتوای صفحات
const DashboardContent = () => <Typography variant="h4">Welcome to the Dashboard</Typography>;
const OrdersContent = () => <Typography variant="h4">Here are your Orders</Typography>;
const ReportsContent = () => <Typography variant="h4">Analytics and Reports</Typography>;
const IntegrationsContent = () => <Typography variant="h4">Manage Integrations</Typography>;

function App() {
  return (

      <DashboardLayoutBasic>
        <Routes>
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/orders" element={<OrdersContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reports" element={<ReportsContent />} />
          <Route path="/integrations" element={<IntegrationsContent />} />
        </Routes>
      </DashboardLayoutBasic>

  );
}

export default App;