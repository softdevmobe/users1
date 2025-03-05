import React from "react";
// import User from "./components/user_";
import User from "./components/user";
import Home from "./components/home";
import NotFound from "./components/notFound";
// import ProtecedRoute from "./components/protectedRote";
import Logout from "./components/logout";

import LoginForm from "./components/loginForm";

import { Routes, Route } from "react-router-dom";
import AppBarSignedIn from "./components/appBarSignedIn";
import AppBarResponsive from "./components/appBarResponsive";
import ExcelSpecifications from "./components/excelSpecifications";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AppBarResponsive />}>
            {/* به عنوان مثال پارامتر userId  و تگ ProtecedRoute کد نمونه 
            <Route path="/user/:userId" element={<User_ />} />
            <Route
              path="/users"
              element={
                <ProtecedRoute>
                  <Users />
                </ProtecedRoute>
              }
            /> */}

            <Route path="/login" element={<LoginForm />} />
            <Route path="/user" element={<User />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/excelSpecifications" element={<ExcelSpecifications />} />
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
