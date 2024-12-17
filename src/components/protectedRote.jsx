import React, { Children } from "react";
import { Navigate } from "react-router-dom";
const ProtecedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};
export default ProtecedRoute;
