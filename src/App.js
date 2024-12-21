import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";

function DashboardContent() {
  return <h2>Welcome to the Dashboard</h2>;
}

function OrdersContent() {
  return <h2>Here are your Orders</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayoutBasic />}>
        <Route path="/dashboard" element={<DashboardContent />} />
        <Route path="/orders" element={<OrdersContent />} />
      </Route>
    </Routes>
  );
}

export default App;