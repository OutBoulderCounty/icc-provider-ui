import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import AuthConsumer from './context/authContext';

export const LOCAL_STORAGE_SESSION_TOKEN = 'sessionToken';
export const LOCAL_STORAGE_SIGN_UP_INFO = 'signUpInfo';
export const LOCAL_STORAGE_SIGN_UP = 'signUp';

type Props = {
    children?: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }: Props) => {
    const navigate = useNavigate();
    const existingSessionToken = localStorage.getItem(
        LOCAL_STORAGE_SESSION_TOKEN
    );
    const { authed, login, logout } = AuthConsumer();

    useEffect(() => {
        if (existingSessionToken && !authed) {
            (async () => {
              try {
                await getUserInfo()
                await login();
              } catch (e) {
                await logout()
                navigate('/login');
              }
            })();
          }
    });

    return (authed || existingSessionToken) ? <>{children}</> : <Navigate to="/login" />;
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
    await login();
};

export const getUserInfo = async () => {
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

    const addressArray = userInfoData.user.address?.split(';') || [];
    localStorage.setItem(
        LOCAL_STORAGE_SIGN_UP_INFO,
        JSON.stringify({...userInfoData.user, street: addressArray[0] || "", city: addressArray[1] || "", state: addressArray[2] || "", zip: addressArray[3] || ""})
    );
};

export const requiredInfoCheck = async () => {
    const signUpInfo = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_SIGN_UP_INFO) || '{}'
    );
    if (!signUpInfo.agreement_accepted) {
        alert('Please complete the sign up process');
        window.location.href = '/complete-sign-up';
    }
};

export const updateUserInfo = async () => {
    const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
    const signUpInfo = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_SIGN_UP_INFO) || '{ "noData": true }'
    );
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', sessionToken ? sessionToken : '');

    if (!signUpInfo.noData) {
        signUpInfo.address = `${signUpInfo.street};${signUpInfo.city};${signUpInfo.state};${signUpInfo.zip}`;

        const res = await fetch(process.env.REACT_APP_API_ENDPOINT + '/user', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(signUpInfo)
        });
        const userInfoData = await res.json();
        if (userInfoData.error) {
            throw new Error(userInfoData.error);
        }
        
        const addressArray = userInfoData.user.address?.split(';') || [];
        localStorage.setItem(
            LOCAL_STORAGE_SIGN_UP_INFO,
            JSON.stringify({...userInfoData.user, street: addressArray[0] || "", city: addressArray[1] || "", state: addressArray[2] || "", zip: addressArray[3] || ""})
        );
    }
};

export const getForm = async (formId: string | undefined) => {
    const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', sessionToken ? sessionToken : '');

    const response = await fetch(
        process.env.REACT_APP_API_ENDPOINT + `/form/${formId}`,
        {
            method: 'GET',
            headers: headers,
        }
    );
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    return data.form;
};

export const saveForm = async (formData: any) => {
    const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
    const responses = [];
    const errors = [];

    for (let element of formData) {
        if (element.value || element.option_ids) {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', sessionToken ? sessionToken : '');
            const response = await fetch(
                process.env.REACT_APP_API_ENDPOINT + `/response`,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(updatedElement(element)),
                }
            );
            const data = await response.json();
            if (data.error) {
              errors.push(data.error);
            } else {
              responses.push(data.response);
            }
        }
    }
    if (errors.length > 0) {
        throw new Error(errors.join('\n'));
    }
    return responses;
};

const updatedElement = (element: any) => {
    if (element.option_ids) {
        return {
            element_id: element.id,
            option_ids: element.option_ids,
        };
    } else {
        return {
            element_id: element.id,
            value: element.value,
        };
    }
};

export default ProtectedRoute;
