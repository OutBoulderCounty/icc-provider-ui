import React from 'react';
import { Navigate } from 'react-router';
import AuthConsumer from './context/authContext';

export const LOCAL_STORAGE_SESSION_TOKEN = 'sessionToken';
export const LOCAL_STORAGE_SIGN_UP_INFO = 'signUpInfo';
export const LOCAL_STORAGE_SIGN_UP = 'signUp';

type Props = {
  children?: React.ReactNode;
};



// export const logoutFn = () => {
//     localStorage.removeItem(LOCAL_STORAGE_SESSION_TOKEN);
//     localStorage.removeItem(LOCAL_STORAGE_SIGN_UP_INFO);
//     localStorage.removeItem(LOCAL_STORAGE_SIGN_UP);
//     window.location.href = '/';
// };

const ProtectedRoute: React.FC<Props> = ({ children }: Props) => {
  const { authed } = AuthConsumer();
  return authed ? <>{children}</> : <Navigate to="/login" />;
}

export default ProtectedRoute;
