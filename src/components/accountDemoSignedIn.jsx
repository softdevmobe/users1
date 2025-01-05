import * as React from "react";
import { AuthenticationContext, SessionContext } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
// import UserContext from "./userContext";
import { useUser } from "./userContext";

export default function AccountDemoSignedIn() {
  const demoSession = useUser();

  const [session, setSession] = React.useState(null);
  React.useEffect(() => {
    if (demoSession && demoSession.user) {
      setSession(demoSession);
    }
  }, [demoSession]);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

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
              sx: { width: "150px", border: " 1px solid #ff9800" },
            },
            signOutButton: {
              color: "success",
              startIcon: <Logout />,
            },
          }}
        />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
