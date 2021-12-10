import { useEffect } from 'react';
import Loader from './loader';
import { LOCAL_STORAGE_SESSION_TOKEN } from '../utils';
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
          (async () => {
            await login();
          })();
        } else if (token) {
            (async () => {
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

                // TODO: handle error for when user uses an old token
                if (authData.error) {
                    alert(authData.error);
                    window.location.href = '/login';
                    return;
                }

                const sessionToken = authData.session_token;
                await localStorage.setItem(
                    LOCAL_STORAGE_SESSION_TOKEN,
                    sessionToken
                );
                await login();
            })();
        }
    });

    return authed ? <Navigate to="/" /> : <Loader />;
}

export default LocalAuth;
