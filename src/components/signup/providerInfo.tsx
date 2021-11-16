import React from "react";




type Props = {
  step?: number;
  setStep?: (step: number) => void;
}



const ProviderInfo: React.FC<Props> = ({ step, setStep }: Props) => {

  return (
    <>
    <h1>Provider Info</h1>

    </>
    )




}

export default ProviderInfo;
