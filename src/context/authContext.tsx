import * as React from "react";
import { LOCAL_STORAGE_SESSION_TOKEN, LOCAL_STORAGE_SIGN_UP_INFO, LOCAL_STORAGE_SIGN_UP} from "../utils";

interface AuthContextInterface {
  authed: boolean;
  login: () => void;
  logout: () => void;
}

type Props = {
  children?: React.ReactNode;
};

const AuthContext = React.createContext({} as AuthContextInterface);

export function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        localStorage.removeItem(LOCAL_STORAGE_SIGN_UP_INFO);
        localStorage.removeItem(LOCAL_STORAGE_SIGN_UP);
        res("Logged In");
      });
    },
    logout() {
      return new Promise((res) => {
        localStorage.removeItem(LOCAL_STORAGE_SESSION_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_SIGN_UP_INFO);
        localStorage.removeItem(LOCAL_STORAGE_SIGN_UP);
        setAuthed(false);
        res("Logged Out");
      });
    }
  };
}

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export default function AuthConsumer() {
  return React.useContext(AuthContext);
}
