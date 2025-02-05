import * as React from "react";
import { AuthenticationContext, SessionContext } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function AccountDemoSignedIn() {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState(null);
  React.useEffect(() => {
    if(!userData)
   { const userData_ = JSON.parse(localStorage.getItem("user"));
    setUserData(userData_);}
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setUserData(userData);
        navigate("/login");
      },
      signOut: () => {
        setUserData(null);
        localStorage.removeItem("user");
         axios.post("/api/users/logout")
        navigate("/");
      },
    };
  }, [userData]);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={userData}>
        <Account
          localeText={{
            signInLabel: "ورود|ثبت‌ نام",
            signOutLabel: "خروج",
          }}
          slotProps={{
            signInButton: {
              color: "inherit",
              startIcon: <Login />,
              sx: { minWidth: "130px", border: "1px solid #ff9800" },
              onClick: authentication.signIn, // رویداد کلیک برای هدایت به لاگین
            },
            signOutButton: {
              color: "success",
              startIcon: <Logout />,
              onClick: authentication.signOut, // رویداد کلیک برای خروج
            },
          }}
        />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
