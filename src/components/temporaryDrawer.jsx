import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import Container from "@mui/material/Container";
import CustomLink from "./customLink";
import MenuIcon from "@mui/icons-material/Menu";
const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "داشبورد",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "انتخاب",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "login",
    title: "ورود",
    icon: <LoginOutlinedIcon />,
  },
  {
    segment: "register",
    title: "ایجاد کاربر",
    icon: <PersonAddAlt1Icon />,
  },
  {

    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "گزارشها",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Container maxWidth="xl">
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
        <List>
          {NAVIGATION.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <CustomLink to={text.segment} text={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );

  return (
    <div >
       <MenuIcon  onClick={toggleDrawer(true)}/>
       {/* <MenuIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} onClick={toggleDrawer(true)} /> */}
      {/* <ResponsiveAppBar onButtonclick={toggleDrawer(true)} /> */}
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
        {DrawerList}
      </Drawer>
      {/* <Outlet /> */}
    </div>
  );
}
