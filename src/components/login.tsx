import React, { useEffect } from 'react';

import ProvideEmail from './signup/provideEmail';
import SignUpProcess from './signup/signupProcess';

import { HomeIcon, ClipboardIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import NavBar, { navItem } from './navBar';
import useSession from '../context/sessionContext';

const navigation: navItem[] = [
    { name: 'Dashboard', path: '/admin', Icon: HomeIcon, Link },
    {
        name: 'Forms',
        path: '/admin/forms',
        Icon: ClipboardIcon,
        Link,
    },
];

// type Props = {
//     authenticated: boolean;
//     setAuthenticated: (authenticated: boolean) => void;
// };

const authorized = ['verykenny@gmail.com'];

const Login: React.FC = () => {
    const data = useSession();
    const { session, setSession } = data;
    const { email, authenticated, signUpStep } = session;


    useEffect(() => {
        // Check if user has completed all the signup steps
        // If they have, then set authenticated to true
        if (authorized.includes(email)) {
            setSession(prev => ({ ...prev, authenticated: true }));
        } else if (email) {
            setSession(prev => ({ ...prev, signUpStep: 2 }));
        }
    }, [email, setSession]);

    if (!email) {
        return (
            <>
                <NavBar items={navigation} loggedIn={false} />
                <ProvideEmail />
            </>
        );
    }

    return (
        <>
            <NavBar items={navigation} loggedIn={false} />
            {/* <SignUpProcess step={step} setStep={setStep} setEmail={setEmail} /> */}
        </>
    );

    return (
      <>
      </>
    )
};

export default Login;
