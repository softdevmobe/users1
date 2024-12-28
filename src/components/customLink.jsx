import { Link } from "react-router-dom";
import "../App.css";
const CustomLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      style={{ fontFamily: "IranianSans",  width: "100%", display: "flex", justifyContent: "right", textDecoration: "none", color: "inherit"}}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
