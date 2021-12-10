import React from 'react';
import Dashboard from './components/dash';
import Login from './components/login';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Forms from './components/forms';
import FAQ from './components/faq';
import LocalAuth from './components/localAuth';
import ProtectedRoute from './utils';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
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
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
