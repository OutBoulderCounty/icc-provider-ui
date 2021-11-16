import React from 'react';
import Dashboard from './components/dash';
import Login from './components/login';
import useSession from './context/sessionContext';

const App: React.FC = () => {
    const {
        session: { authenticated },
    } = useSession();

    return <>{authenticated ? <Dashboard /> : <Login />}</>;
}

export default App;
