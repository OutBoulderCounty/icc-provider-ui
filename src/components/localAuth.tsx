import { useEffect } from 'react';
import Loader from './loader';
import { authenticateUserToken, requiredInfoCheck, LOCAL_STORAGE_SESSION_TOKEN } from '../utils';
import AuthConsumer from '../context/authContext';
import { Navigate } from 'react-router';

function LocalAuth() {
    const { authed, login } = AuthConsumer();
    const existingSessionToken = localStorage.getItem(
        LOCAL_STORAGE_SESSION_TOKEN
    );
    const url = window.location.search;
    const urlSearch = new URLSearchParams(url);
    const token = urlSearch.get('token');

    useEffect(() => {
        if (existingSessionToken) {
          login();
        } else if (token) {
          (async () => {
            try {
            await authenticateUserToken(token, login);
            await requiredInfoCheck();
          } catch (error) {
            alert(error);
            window.location.href = '/login';
          }
          })();
        }
    });

    return authed ? <Navigate to="/" /> : <Loader />;
}

export default LocalAuth;
