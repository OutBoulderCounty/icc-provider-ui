import React, { useEffect } from 'react';
import Dashboard from './components/dash';
import Login from './components/login';
import useSession from './context/sessionContext';
import Footer from './components/footer';

const App: React.FC = () => {
    const {
        session: { authenticated },
        setSession,
    } = useSession();

    useEffect(() => {
      if (!authenticated) {
        const sessionToken = localStorage.getItem('sessionToken');
        if (sessionToken) {
          setSession(prev => ({ ...prev, authenticated: true }));
        }
      }
    })

    return (
    <>
    {authenticated ? <Dashboard /> : <Login />}
    <Footer />
    </>);
}

export default App;
