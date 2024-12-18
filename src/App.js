import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Login from "./components/Login";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic"; // داشبورد به‌عنوان لایه اصلی
import ReportsContent from "./ReportsContent";


function App() {
  return (
    <Router>
      <Routes>
        {/* اینجا DashboardLayoutBasic به‌عنوان لایه پایه قرار دارد */}
        <Route path="/" element={<DashboardLayoutBasic />}>


          <Route path="/login" element={<Login />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
