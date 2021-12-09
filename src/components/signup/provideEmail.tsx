import React from 'react';

import { LockClosedIcon } from '@heroicons/react/solid';
import useSession from '../../context/sessionContext';
import { LOCAL_STORAGE_SIGN_UP } from '../../utils';

const ProvideEmail: React.FC = () => {
    const signUp = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_SIGN_UP) || '{}'
    );
    const { setSession } = useSession();
    const [providedEmail, setProvidedEmail] = React.useState<string>(
        signUp.email || ''
    );

    const handleLoginFn = (e: React.SyntheticEvent) => {
        e.preventDefault();

        //TODO: validate email
        // If valid, send post request to server

        // If not valid, continue signup process
        setSession((prev) => ({
            ...prev,
            email: providedEmail,
            signUpStep: 2,
        }));
        localStorage.setItem(
            LOCAL_STORAGE_SIGN_UP,
            JSON.stringify({
                ...signUp,
                email: providedEmail,
                signUpStep: 2,
            })
        );
    };

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="logo.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                            Create or sign into your provider account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLoginFn}>
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-violet focus:border-violet focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={providedEmail}
                                    onChange={(e) =>
                                        setProvidedEmail(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-violet-darkest group-hover:text-violet-lightest"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProvideEmail;
