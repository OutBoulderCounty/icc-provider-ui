import React, { useEffect } from 'react';
import Dashboard from './components/dash';
import Login from './components/login';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Forms from './components/forms';
import FAQ from './components/faq';
import LocalAuth from './components/localAuth';
import ProtectedRoute from './utils';
import { Routes, Route } from 'react-router-dom';
import SignUpProcess from './components/signup/signupProcess';
import ProviderInfo from './components/signup/providerInfo';
import { LOCAL_STORAGE_SESSION_TOKEN } from './utils';
import AuthConsumer from './context/authContext';

const App: React.FC = () => {
    const existingSessionToken = localStorage.getItem(
        LOCAL_STORAGE_SESSION_TOKEN
    );
    const { login } = AuthConsumer();

    useEffect(() => {
        if (existingSessionToken) {
            (async () => {
                await login();
            })();
        }
    });
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                ></Route>
                <Route
                    path="/forms"
                    element={
                        <ProtectedRoute>
                            <Forms />
                        </ProtectedRoute>
                    }
                ></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/localauth" element={<LocalAuth />}></Route>
                <Route
                    path="/complete-sign-up"
                    element={<SignUpProcess />}
                ></Route>
                <Route
                    path="/account-update"
                    element={<ProviderInfo />}
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
