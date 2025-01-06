import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({
  user: { name: "1", email: "1", image: "/uploads/picture/picture-1733901054403-h1yafewvibtx.png" },
  updateUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: null,
    email: null,
    image: null,
  });

  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {" "}
      {/* spread لازم نیست */}
      {children} {/* این خط حیاتی است! */}
    </UserContext.Provider>
  );
};

export default UserContext; // export default برای استفاده مستقیم از Context
export const useUser = () => useContext(UserContext); // export برای هوک سفارشی
