import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashboardLayoutBasic() {
  return (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link> | <Link to="/orders">Orders</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayoutBasic;