import React, { useEffect } from 'react';
import Dashboard from './components/dash';
import Login from './components/login';
import useSession from './context/sessionContext';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Forms from './components/forms';
import FAQ from './components/faq';
import LocalAuth from './components/localAuth';
import { LOCAL_STORAGE_SESSION_TOKEN } from './utils';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
    const {
        session: { authenticated },
        setSession,
    } = useSession();

    useEffect(() => {
        if (!authenticated) {
            const sessionToken = localStorage.getItem(
                LOCAL_STORAGE_SESSION_TOKEN
            );
            if (sessionToken) {
                setSession((prev) => ({ ...prev, authenticated: true }));
            }
        }
    });

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NavBar />
            {/* {authenticated ? <Dashboard /> : <Login />} */}

            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/forms" element={<Forms />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/localauth" element={<LocalAuth />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
