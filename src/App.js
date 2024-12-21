import React, { Component } from "react";
import Users from "./components/users";
import User from "./components/user";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtecedRoute from "./components/protectedRote";
import Logout from "./components/logout";
import Product from "./components/Product";
import LoginForm from "./components/loginForm";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic"; // Import مسیر جدید
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

const DashboardContent = () => <Typography variant="h4">Welcome to the Dashboard</Typography>;
const OrdersContent = () => <Typography variant="h4">Here are your Orders</Typography>;
const ReportsContent = () => <Typography variant="h4">Analytics and Reports</Typography>;
const IntegrationsContent = () => <Typography variant="h4">Manage Integrations</Typography>;

class App extends Component {
  render() {
    return (
      <Router>
        {/* DashboardLayoutBasic به عنوان Layout اصلی */}
        <DashboardLayoutBasic>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/product" element={<Product />} />
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/orders" element={<OrdersContent />} />
            <Route path="/reports" element={<ReportsContent />} />
            <Route path="/integrations" element={<IntegrationsContent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayoutBasic>
      </Router>
    );
  }
}

export default App;