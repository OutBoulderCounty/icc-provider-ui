import React from 'react';
import { Navigate } from 'react-router';
import AuthConsumer from './context/authContext';
import {SessionInterface } from './context/sessionContext';

export const LOCAL_STORAGE_SESSION_TOKEN = 'sessionToken';
export const LOCAL_STORAGE_SIGN_UP_INFO = 'signUpInfo';
export const LOCAL_STORAGE_SIGN_UP = 'signUp';

type Props = {
  children?: React.ReactNode;
};

type AppContextInterface = {
    session: SessionInterface;
    setSession: React.Dispatch<React.SetStateAction<SessionInterface>>;
}

export const logoutFn = ({session, setSession}:AppContextInterface) => {
    localStorage.removeItem(LOCAL_STORAGE_SESSION_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_SIGN_UP_INFO);
    localStorage.removeItem(LOCAL_STORAGE_SIGN_UP);
    window.location.href = '/';
    setSession({
      email: '',
      authenticated: false,
      signUpStep: 0,
      disclaimer: false,
  });
};

const ProtectedRoute: React.FC<Props> = ({ children }: Props) => {
  const { authed } = AuthConsumer();
  return authed ? <>{children}</> : <Navigate to="/localauth" />;
}

export default ProtectedRoute;
