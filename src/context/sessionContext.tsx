import React from 'react';

interface SessionInterface {
    email: string;
    authenticated: boolean;
    signUpStep: number;
}

interface AppContextInterface {
    session: SessionInterface;
    setSession: React.Dispatch<React.SetStateAction<SessionInterface>>;
}

export const SessionContext = React.createContext({} as AppContextInterface);

type Props = {
    children?: React.ReactNode;
};

export const SessionProvider: React.FC<Props> = ({ children }: Props) => {
    const [session, setSession] = React.useState({
        email: '',
        authenticated: false,
        signUpStep: 0,
    });

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
};

const useSession = () => {
    return React.useContext(SessionContext);
};

export default useSession;
