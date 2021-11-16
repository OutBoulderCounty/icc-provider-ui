import React, { useEffect } from 'react';

import ProvideEmail from './signup/provide_email';
import SignUpProcess from './signup/signup_process';

import { HomeIcon, ClipboardIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import NavBar, { navItem } from './navBar';

const navigation: navItem[] = [
    { name: 'Dashboard', path: '/admin', Icon: HomeIcon, Link },
    {
        name: 'Forms',
        path: '/admin/forms',
        Icon: ClipboardIcon,
        Link,
    },
];

type Props = {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
};

const authorized = ['verykenny@gmail.com'];

const Login: React.FC<Props> = ({ authenticated, setAuthenticated }: Props) => {
    const [email, setEmail] = React.useState<string>('');
    const [step, setStep] = React.useState<number>(1);

    useEffect(() => {
        // Check if user has completed all the signup steps
        // If they have, then set authenticated to true
        if (authorized.includes(email)) {
            setAuthenticated(true);
        } else {
            setStep(2);
        }
    }, [email, setAuthenticated]);

    if (!email) {
        return (
            <>
                <NavBar items={navigation} loggedIn={false} />
                <ProvideEmail setEmail={setEmail} />
            </>
        );
    }

    return (
        <>
            <NavBar items={navigation} loggedIn={false} />
            <SignUpProcess step={step} setStep={setStep} />
        </>
    );
};

export default Login;
