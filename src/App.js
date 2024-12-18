import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Login from "./Login";
import DashboardLayoutBasic from "./DashboardLayoutBasic"; // داشبورد به‌عنوان لایه اصلی
import ReportsContent from "./ReportsContent";
import IntegrationsContent from "./IntegrationsContent";

function App() {
  return (
    <Router>
      <Routes>
        {/* اینجا DashboardLayoutBasic به‌عنوان لایه پایه قرار دارد */}
        <Route path="/" element={<DashboardLayoutBasic />}>
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/orders" element={<DashboardContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reports" element={<ReportsContent />} />
          <Route path="/integrations" element={<IntegrationsContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
