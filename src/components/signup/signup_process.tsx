import React from "react";
import Disclaimer from "./disclaimer";
import ProviderInfo from "./provider_info";
import ProvideEmail from "./provide_email";
import StepTracker from "./steps";



type Props = {
  step: number;
  setStep: (step: number) => void;
}

const signUpComponent = [<Disclaimer />, <ProviderInfo />];


const SignUpProcess: React.FC<Props> = ({ step, setStep }: Props) => {



  return (
    <>
    <StepTracker setStep={setStep} />
    {signUpComponent[step - 2]}
    </>
    )




}

export default SignUpProcess;
