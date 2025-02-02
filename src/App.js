import React from "react";
import Users from "./components/users";
import User from "./components/user";
import Register from "./components/register";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtecedRoute from "./components/protectedRote";
import Logout from "./components/logout";
import Product from "./components/Product";
import Courses from "./components/courses";
import LoginForm from "./components/loginForm";

import { Routes, Route } from "react-router-dom";
import AppBarSignedIn from "./components/appBarSignedIn";
import AppBarResponsive from "./components/appBarResponsive";

function App() {
  return (
    <>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<AppBarResponsive />}>
            <Route path="/user/:userId" element={<User />} />
            <Route
              path="/users"
              element={
                <ProtecedRoute>
                  <Users />
                </ProtecedRoute>
              }
            />

            <Route path="/Courses" element={<Courses />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/product" element={<Product />} />
            <Route path="/appBarSignedIn" element={<AppBarSignedIn />} />
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
