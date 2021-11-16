import React from "react";

import Disclaimer from "./disclaimer";
import ProviderInfo from "./providerInfo";
import StepTracker from "./steps";
import useSession from "../../context/sessionContext";
import ProvideEmail from "./provideEmail";


const signUpComponent = [<ProvideEmail />, <Disclaimer />, <ProviderInfo />];

const SignUpProcess: React.FC = () => {
  const { session: { signUpStep }} = useSession();


  return (
    <>
    <StepTracker />
    {signUpComponent[signUpStep - 1]}
    </>
    )
}

export default SignUpProcess;
