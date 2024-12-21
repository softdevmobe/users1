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
import DashboardLayoutBasic from "./components/DashboardLayoutBasic"; // مسیر اصلاح‌شده
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (

        <Routes>
          {/* استفاده از Layout برای مسیرهای مشترک */}
          <Route path="/" element={<DashboardLayoutBasic />}>
            <Route index element={<Home />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="users" element={<Users />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
            <Route path="product" element={<Product />} />
            <Route path="loginForm" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

    );
  }
}

export default App;