import React from "react";
import Disclaimer from "./disclaimer";
import ProviderInfo from "./providerInfo";
import ProvideEmail from "./provideEmail";
import StepTracker from "./steps";



type Props = {
  step: number;
  setStep: (step: number) => void;
  setEmail: (email: string) => void;
}

const signUpComponent = [<Disclaimer />, <ProviderInfo />];


const SignUpProcess: React.FC<Props> = ({ step, setStep, setEmail }: Props) => {



  return (
    <>
    <StepTracker setStep={setStep} setEmail={setEmail} />
    {signUpComponent[step - 2]}
    </>
    )




}

export default SignUpProcess;
