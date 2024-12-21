import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard" },
  { segment: "orders", title: "Orders" },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  { segment: "reports", title: "Reports" },
  { segment: "integrations", title: "Integrations" },
];

function DashboardLayoutBasic({ children }) {
  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout>
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {children}
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayoutBasic;