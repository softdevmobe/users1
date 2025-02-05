import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CustomLink from "./customLink";
import {  useLocation } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
// دیکشنری مسیرها به فارسی
const breadcrumbNameMap = {
  products: "محصولات",
  login: "ورود",
  clothing: "پوشاک",
  home: "خانه",
};
export default function AppBarBreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div role="presentation" onClick={handleClick} >
      <Breadcrumbs aria-label="breadcrumb">
        <CustomLink to={"/"} text={"خانه"} />
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const displayName = breadcrumbNameMap[value] || value;
          return <CustomLink to={to} text={displayName} key={index} />;
        })}
      </Breadcrumbs>
    </div>
  );
}
