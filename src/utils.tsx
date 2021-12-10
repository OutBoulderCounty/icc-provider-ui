import React from 'react';
import { Navigate } from 'react-router';
import AuthConsumer from './context/authContext';

export const LOCAL_STORAGE_SESSION_TOKEN = 'sessionToken';
export const LOCAL_STORAGE_SIGN_UP_INFO = 'signUpInfo';
export const LOCAL_STORAGE_SIGN_UP = 'signUp';

type Props = {
    children?: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }: Props) => {
    const { authed } = AuthConsumer();
    return authed ? <>{children}</> : <Navigate to="/login" />;
};

export const authenticateUserToken = async (
    token: string,
    login: () => void
) => {
    const authResponse = await fetch(
        process.env.REACT_APP_API_ENDPOINT + '/authenticate',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
            }),
        }
    );
    const authData = await authResponse.json();
    if (authData.error) {
        throw new Error(authData.error);
    }

    const sessionToken = authData.session_token;
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, sessionToken);
    login();
};

export const requiredInfoCheck = async () => {
    const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', sessionToken ? sessionToken : '');
    const response = await fetch(process.env.REACT_APP_API_ENDPOINT + '/user', {
        method: 'GET',
        headers: headers,
    });
    const userInfoData = await response.json();
    if (userInfoData.error) {
      throw new Error(userInfoData.error);
    }

    localStorage.setItem(LOCAL_STORAGE_SIGN_UP_INFO, JSON.stringify(userInfoData.user));
    if (!userInfoData.user.AgreementAccepted) {
      alert('Please accept the terms and conditions');
      window.location.href = '/complete-sign-up';
    } else {
      alert('Welcome to the app');
    }

};

export const updateUserInfo = async () => {
  const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
  const signUpInfo = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_SIGN_UP_INFO) || '{ "noData": true }'
  );

  if (!signUpInfo.noData) {
      signUpInfo.Address = `${signUpInfo.Street}, ${signUpInfo.City}, ${signUpInfo.State} ${signUpInfo.Zip}`;
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', sessionToken ? sessionToken : '');

      const res = await fetch(process.env.REACT_APP_API_ENDPOINT + '/user', {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(signUpInfo),
      });
      const userInfoData = await res.json();
      if (userInfoData.error) {
        throw new Error(userInfoData.error);
      }
      localStorage.setItem(LOCAL_STORAGE_SIGN_UP_INFO, JSON.stringify(userInfoData.user));
  }
};

export default ProtectedRoute;
