import { useEffect } from 'react';
import Loader from './loader';

function LocalAuth() {
    useEffect(() => {
        const url = window.location.search;
        const urlSearch = new URLSearchParams(url);
        const token = urlSearch.get('token');
        const signUpInfo = JSON.parse(localStorage.getItem('signUpInfo') || '{}');
        const userInfo = JSON.parse(localStorage.getItem('signUp') || '{}');
        const userUpdateInfo = {...signUpInfo, ...userInfo}

        if (token) {
            (async () => {
                const authResponse = await fetch('http://localhost:8080/authenticate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token,
                    }),
                });
                const authData = await authResponse.json();
                const sessionToken = authData.session_token;
                await localStorage.setItem('sessionToken', sessionToken);
                await localStorage.removeItem('userId');


                const headers = new Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', sessionToken ? sessionToken : '');

                const updateResponse = await fetch('http://localhost:8080/user', {
                  method: 'PUT',
                  headers: headers,
                  body: JSON.stringify(userUpdateInfo),
                });
                const updateData = await updateResponse.json();
                console.log(updateData);
                await localStorage.setItem('responseInfo', JSON.stringify({...updateData.user}));

                await localStorage.removeItem('signUpInfo');
                await localStorage.removeItem('signUp');
                window.location.href = '/';
            })();
        }
    });

    return (
        <div>
            <Loader></Loader>
        </div>
    );
}

export default LocalAuth;
