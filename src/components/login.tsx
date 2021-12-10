import React, { useEffect } from 'react';

import ProvideEmail from './signup/provideEmail';
import { LOCAL_STORAGE_SESSION_TOKEN } from '../utils';
import AuthConsumer from '../context/authContext';
import { Navigate } from 'react-router';


const Login: React.FC = () => {
    const existingSessionToken = localStorage.getItem(
        LOCAL_STORAGE_SESSION_TOKEN
    );
    const { authed, login } = AuthConsumer();

    useEffect(() => {
        if (existingSessionToken) {
            (async () => {
                await login();
            })();
        }
    });

    return (
        <>
            <div className="overflow-y-scroll overflow-x-hidden flex-grow">
                {authed ? <Navigate to="/" /> : <ProvideEmail />}
            </div>
        </>
    );
};

export default Login;
