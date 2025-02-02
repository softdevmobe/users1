import * as React from "react";
import { AuthenticationContext, SessionContext } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";

import { useNavigate } from "react-router-dom";
export default function AppBarSignedIn() {
  const { user, updateUser } = React.useContext(AuthenticationContext);
  const navigate = useNavigate();
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        console.log("signIn", user);
        updateUser(user);
        navigate("/login"); // هدایت به صفحه لاگین
      },
      signOut: () => {
        updateUser(null);
        navigate("/"); // هدایت به صفحه اصلی بعد از خروج
      },
    };
  }, [user]);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={user}>
        <Account
          localeText={{
            signInLabel: "ورود | ثبت‌ نام",
            signOutLabel: "خروج",
          }}
          slotProps={{
            signInButton: {
              color: "inherit",
              startIcon: <Login />,
              sx: { minWidth: "150px", border: "1px solid #ff9800" },
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
