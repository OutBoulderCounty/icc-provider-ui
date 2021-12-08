import React, { useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline';


import NavBar, { navItem } from './navBar';
import ProvideEmail from './signup/provideEmail';
import SignUpProcess from './signup/signupProcess';
import useSession from '../context/sessionContext';
import LocalAuth from './localAuth';
import FAQ from './faq';

const navigation: navItem[] = [
    {
        name: 'Login / Signup',
        path: '/',
        Icon: LoginIcon,
        Link,
    },
    // {
    //     name: 'Forms',
    //     path: '/admin/forms',
    //     Icon: ClipboardIcon,
    //     Link,
    // },
];

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

    // if (!email) {
        return (
            <>
                <NavBar items={navigation} loggedIn={false} />
                <div className="overflow-y-scroll overflow-x-hidden">
                    <Routes>
                        <Route path="/" element={email ? <SignUpProcess /> : <ProvideEmail />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route
                            path="/localauth"
                            element={<LocalAuth />}
                        ></Route>
                    </Routes>
                </div>
            </>
        );
    // }

    // return (
    //     <>
    //         <NavBar items={navigation} loggedIn={false} />
    //         <SignUpProcess />
    //     </>
    // );
};

export default Login;
