
import {SessionInterface } from './context/sessionContext';

type AppContextInterface = {
    session: SessionInterface;
    setSession: React.Dispatch<React.SetStateAction<SessionInterface>>;
}

const logoutFn = ({session, setSession}:AppContextInterface) => {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('signUpInfo');
    localStorage.removeItem('signUp');
    window.location.href = '/';
    setSession({
      email: '',
      authenticated: false,
      signUpStep: 0,
      disclaimer: false,
  });
};

export default logoutFn;
