import React, { useEffect } from 'react';

import ProvideEmail from './signup/provideEmail';
import SignUpProcess from './signup/signupProcess';
import useSession from '../context/sessionContext';


const authorizedList: string[] = [];

const Login: React.FC = () => {
    const {
        session: { email },
        setSession,
    } = useSession();

    useEffect(() => {
        // Check if user has completed all the signup steps
        // If they have, then set authenticated to true
        if (authorizedList.includes(email)) {
            setSession((prev) => ({ ...prev, authenticated: true }));
        } else if (email) {
            setSession((prev) => ({ ...prev, signUpStep: 2 }));
        }
    }, [email, setSession]);

    return (
        <>
            <div className="overflow-y-scroll overflow-x-hidden flex-grow">
                {email ? <SignUpProcess /> : <ProvideEmail />}
            </div>
        </>
    );
};

export default Login;
