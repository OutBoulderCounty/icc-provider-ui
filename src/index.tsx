import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './context/sessionContext';

ReactDOM.render(
    <React.StrictMode>
      <SessionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </SessionProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
