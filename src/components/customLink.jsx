import { Link } from "react-router-dom";

const CustomLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      style={{   fontFamily: "Vazir, Arial, sans-serif", width: "100%", display: "flex", justifyContent: "right", textDecoration: "none", color: "red" }}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
