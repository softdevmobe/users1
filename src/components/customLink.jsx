import { Link } from "react-router-dom";
import "../App.css";
const CustomLink = ({ to, text  }) => {
  return (
    <Link
      to={to}
      style={{ width: "100%", display: "flex", justifyContent: "right", textDecoration: "none", color: "#000000" }}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
