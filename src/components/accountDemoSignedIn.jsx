import * as React from "react";
import { AuthenticationContext, SessionContext } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import { useUser } from "./userContext";
import { useNavigate } from "react-router-dom";

export default function AccountDemoSignedIn() {
  const demoSession = useUser();
  const [session, setSession] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (demoSession.user?.name) {
      setSession(demoSession);
      navigate("/"); // هدایت به صفحه اصلی بعد از لاگین موفق
    }
  }, [demoSession]);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        navigate("/login"); // هدایت به صفحه لاگین
      },
      signOut: () => {
        setSession(null);
        navigate("/"); // هدایت به صفحه اصلی بعد از خروج
      },
    };
  }, [navigate]);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        <Account
          localeText={{
            signInLabel: "ورود | ثبت‌ نام",
            signOutLabel: "خروج",
          }}
          slotProps={{
            signInButton: {
              color: "inherit",
              startIcon: <Login />,
              sx: { width: "150px", border: "1px solid #ff9800" },
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
