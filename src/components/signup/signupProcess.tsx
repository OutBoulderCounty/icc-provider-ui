import React, { useEffect } from 'react';
import Disclaimer from './disclaimer';
import ProviderInfo from './providerInfo';
import StepTracker from './steps';

const signUpComponent = [<Disclaimer />, <ProviderInfo />];

const SignUpProcess: React.FC = () => {
    const [signUpStep, setSignUpStep] = React.useState(1);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return (
        <>
            <StepTracker
                signUpStep={signUpStep}
                setSignUpStep={setSignUpStep}
            />
            {signUpComponent[signUpStep - 1]}
        </>
    );
};

export default SignUpProcess;
