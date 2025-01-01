import React, { createContext, useContext, useState } from "react";
const UserContext = createContext({
  user: { name: "", email: "", image: "https://avatars.githubusercontent.com/u/19550456" },
  // https://avatars.githubusercontent.com/u/19550456
  updateUser: () => {},
});
export const UserProvider = ({ Children }) => {
  const [user, setUser] = useState({
    name: "a",
    email: "b",
    image: "https://avatars.githubusercontent.com/u/19550456",
  });
  const updateUser = (newUserData) => {
    setUser(newUserData);
  };
  return <UserContext.Provider value={{ ...user, updateUser }}>{Children}</UserContext.Provider>;
};
export const useUser = () => {
  return useContext(UserContext);
};
export default UserContext;
