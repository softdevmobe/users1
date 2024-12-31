import React, { Component } from "react";
import Users from "./components/users";
import User from "./components/user";
// import LoginForm from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtecedRoute from "./components/protectedRote";
import Logout from "./components/logout";
import Product from "./components/Product";
import LoginForm from "./components/loginForm";
import TemporaryDrawer from "./components/temporaryDrawer"; // Import مسیر جدید
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      
    
        <div className="container mt-3">

   
        <Routes>
        <Route path="/" element={<TemporaryDrawer />} >
          <Route path="/user/:userId" element={<User />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product" element={<Product />} />
          <Route path="/loginForm" element={<LoginForm />} />
         


          <Route path="/" element={  <ProtecedRoute>
              <Home />
              </ProtecedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
 
        </div>

      
      </>
    );
  }
}

export default App;