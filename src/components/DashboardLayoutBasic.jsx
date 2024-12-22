import * as React from "react";
import PropTypes from "prop-types";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Link as RouterLink, useNavigate } from "react-router-dom";


const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",

  },
  {
    segment: "orders",
    title: "Orders",
  },
  {
    segment: "login",
    title: "login",

  },
];

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");
  console.log(router);
  const demoWindow = window !== undefined ? window() : undefined;
  const navi = useNavigate();
  return (
    <AppProvider navigation={NAVIGATION} router={router} window={demoWindow}>
      <DashboardLayout>
        navi({router.pathname})
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};
export default DashboardLayoutBasic;
