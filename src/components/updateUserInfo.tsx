import React, { useEffect } from 'react';
import AuthConsumer from '../context/authContext';
import {
    LOCAL_STORAGE_SESSION_TOKEN,
    LOCAL_STORAGE_SIGN_UP,
    LOCAL_STORAGE_SIGN_UP_INFO,
} from '../utils';

function UpdateUserInfo() {
    const { login } = AuthConsumer();
    const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
    const signUpInfo = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_SIGN_UP_INFO) || '{ "noData": true }'
    );
    const userInfo = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_SIGN_UP) || '{}'
    );
    const userUpdateInfo = { ...signUpInfo, ...userInfo };
    useEffect(() => {
        (async () => {
            if (!signUpInfo.noData) {
                userUpdateInfo.address = `${signUpInfo.street}, ${signUpInfo.city}, ${signUpInfo.state} ${signUpInfo.zip}`;
                const headers = new Headers();
                headers.append('Content-Type', 'application/json');
                headers.append(
                    'Authorization',
                    sessionToken ? sessionToken : ''
                );

                // const updateResponse = await fetch(
                await fetch(process.env.REACT_APP_API_ENDPOINT + '/user', {
                    method: 'PUT',
                    headers: headers,
                    body: JSON.stringify(userUpdateInfo),
                });

                // const updateData = await updateResponse.json();
                // await localStorage.setItem(
                //     'responseInfo',
                //     JSON.stringify({ ...updateData.user })
                // );

                await login();
            }
        })();
    });

    return <div></div>;
}

export default UpdateUserInfo;
