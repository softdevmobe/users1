import * as React from "react";
import { AuthenticationContext, SessionContext } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import UserContext from "./userContext";
import { useUser } from "./userContext";
const demoSession = {
  user: {
    name: "3",
    email: "3",
    image: "https://avatars.githubusercontent.com/u/19550456",
  },
  updateUser: () => {},
};

export default function AccountDemoSignedIn() {
  const demoses = useUser();

  const [session, setSession] = React.useState(demoses);

  console.log(demoses);
  console.log(session);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoses);
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
