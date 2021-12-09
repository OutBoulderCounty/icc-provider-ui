import {SessionInterface } from './context/sessionContext';

export const LOCAL_STORAGE_SESSION_TOKEN = 'sessionToken';
export const LOCAL_STORAGE_SIGN_UP_INFO = 'signUpInfo';
export const LOCAL_STORAGE_SIGN_UP = 'signUp';

type AppContextInterface = {
    session: SessionInterface;
    setSession: React.Dispatch<React.SetStateAction<SessionInterface>>;
}

const logoutFn = ({session, setSession}:AppContextInterface) => {
    localStorage.removeItem(LOCAL_STORAGE_SESSION_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_SIGN_UP_INFO);
    localStorage.removeItem(LOCAL_STORAGE_SIGN_UP);
    window.location.href = '/';
    setSession({
      email: '',
      authenticated: false,
      signUpStep: 0,
      disclaimer: false,
  });
};

export default logoutFn;
