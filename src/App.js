<<<<<<< HEAD
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
=======
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
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<DashboardLayoutBasic />}>
            <Route path="/user/:userId" element={<User />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/product" element={<Product />} />
            <Route path="/loginForm" element={<LoginForm />} />

            {/* مسیر جدید برای DashboardLayoutBasic */}
            <Route path="/dashboard-layout" element={<DashboardLayoutBasic />} />

            <Route
              path="/"
              element={
                <ProtecedRoute>
                  <Home />
                </ProtecedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
  }
>>>>>>> parent of 84954c0 (Update App.js)
}

export default App;
