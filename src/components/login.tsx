import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ClipboardIcon } from '@heroicons/react/outline';

import NavBar, { navItem } from './navBar';
import ProvideEmail from './signup/provideEmail';
import SignUpProcess from './signup/signupProcess';
import useSession from '../context/sessionContext';

const navigation: navItem[] = [
    {
        name: 'Dashboard',
        path: '/admin',
        Icon: HomeIcon,
        Link,
    },
    {
        name: 'Forms',
        path: '/admin/forms',
        Icon: ClipboardIcon,
        Link,
    },
];

const authorizedList = ['verykenny@gmail.com'];

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
            <SignUpProcess />
        </>
    );
};

export default Login;
