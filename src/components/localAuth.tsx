import { useEffect } from 'react';
import Loader from './loader';
import {
    authenticateUserToken,
    requiredInfoCheck,
    getUserInfo,
    LOCAL_STORAGE_SESSION_TOKEN,
} from '../utils';
import AuthConsumer from '../context/authContext';
import { Navigate, useNavigate } from 'react-router';

function LocalAuth() {
    const navigate = useNavigate();
    const { authed, login, logout } = AuthConsumer();
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
                    await getUserInfo();
                    const hasRequiredInfo = await requiredInfoCheck();
                    if (!hasRequiredInfo) {
                        navigate('/complete-sign-up');
                    }
                } catch (error) {
                    alert(error);
                    logout();
                    navigate('/login');
                }
            })();
        }
    });

    return authed ? <Navigate to="/" /> : <Loader />;
}

export default LocalAuth;
