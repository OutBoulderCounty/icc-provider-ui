import React, { useEffect } from 'react';
import Dashboard from './components/dash';
import Login from './components/login';
import useSession from './context/sessionContext';
import Footer from './components/footer';
import NavBar from './components/navBar';
import { LOCAL_STORAGE_SESSION_TOKEN } from './utils';

const App: React.FC = () => {
    const {
        session: { authenticated },
        setSession,
    } = useSession();

    useEffect(() => {
        if (!authenticated) {
            const sessionToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);
            if (sessionToken) {
                setSession((prev) => ({ ...prev, authenticated: true }));
            }
        }
    });

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NavBar />
            {authenticated ? <Dashboard /> : <Login />}
            <Footer />
        </div>
    );
};

export default App;
