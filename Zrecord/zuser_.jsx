import { useParams, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
const User = () => {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/NotFound");
  }
  const parsedHash = queryString.parse(location.search);
  console.log(parsedHash);
  const [user, setUser] = useState({});
  const uu = userId;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://reqres.in/api/users/${uu}`);
      setUser(response.data.data);
    };
    fetchData();
  }, []);
  
  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />
      <h4>
        {user.first_name}
        {user.last_name}
      </h4>
      <h5>{user.email}</h5>

      <button onClick={handleClick} className="btn btn-info mt-3">
        www
      </button>
      
    </>
  );
};

export default User;
