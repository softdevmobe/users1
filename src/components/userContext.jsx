import React, { useState } from "react";
import { AuthenticationContext } from "@toolpad/core/AppProvider";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const updateUser = (newUserData) => {
    console.log(newUserData);
    setUser(newUserData);
  };
  return <AuthenticationContext.Provider value={{ user, updateUser }}> {children}</AuthenticationContext.Provider>;
};
export default UserProvider;
