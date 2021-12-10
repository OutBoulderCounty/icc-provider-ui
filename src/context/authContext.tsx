import * as React from "react";


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
        res(null);
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res(null);
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
