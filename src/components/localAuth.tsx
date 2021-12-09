import { useEffect } from 'react';
import Loader from './loader';
import { LOCAL_STORAGE_SESSION_TOKEN, LOCAL_STORAGE_SIGN_UP, LOCAL_STORAGE_SIGN_UP_INFO } from '../utils';

function LocalAuth() {
    useEffect(() => {
        const url = window.location.search;
        const urlSearch = new URLSearchParams(url);
        const token = urlSearch.get('token');
        const signUpInfo = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_SIGN_UP_INFO) || '{ "noData": true }'
        );
        const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SIGN_UP) || '{}');
        const userUpdateInfo = { ...signUpInfo, ...userInfo };

        if (token) {
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
                    window.location.href = '/';
                    return;
                }

                const sessionToken = authData.session_token;
                await localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, sessionToken);

                if (!signUpInfo.noData) {
                    userUpdateInfo.address = `${signUpInfo.street}, ${signUpInfo.city}, ${signUpInfo.state} ${signUpInfo.zip}`;
                    const headers = new Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append(
                        'Authorization',
                        sessionToken ? sessionToken : ''
                    );

                    // const updateResponse = await fetch(
                    await fetch(
                      process.env.REACT_APP_API_ENDPOINT + '/user',
                        {
                            method: 'PUT',
                            headers: headers,
                            body: JSON.stringify(userUpdateInfo),
                        }
                    );

                    // const updateData = await updateResponse.json();
                    // await localStorage.setItem(
                    //     'responseInfo',
                    //     JSON.stringify({ ...updateData.user })
                    // );
                    await localStorage.removeItem(LOCAL_STORAGE_SIGN_UP_INFO);
                    await localStorage.removeItem(LOCAL_STORAGE_SIGN_UP);

                    window.location.href = '/';
                }
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
