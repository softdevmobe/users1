import React, { createContext, useState } from "react";
const UserContext = createContext({
  user: { name: "", email: "", image: "https://avatars.githubusercontent.com/u/19550456" },
  updateUser: () => {},
});
export const UserProvider = ({ Children }) => {
  const [user, setUser] = useState({ name: "", email: "", image: "" });
  const updateUser = (newUserData) => {
    setUser(newUserData);
  };
  return <UserContext.Provider value={{ ...user, updateUser }}>{Children}</UserContext.Provider>;
};
export default UserContext;
