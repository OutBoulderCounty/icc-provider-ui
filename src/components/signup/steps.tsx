import React from 'react';

import useSession from '../../context/sessionContext';

const steps = [
    { id: 1, name: 'Provide email' },
    { id: 2, name: 'About this resource' },
    { id: 3, name: 'Provider information' },
];

const StepTracker: React.FC = () => {
    const { session: { signUpStep }, setSession } = useSession();

    const handleChangeStep = (step: number) => {
        if (step === 1) {
            setSession((prev) => ({ ...prev, signUpStep: step }));
        } else {
            setSession((prev) => ({ ...prev, signUpStep: step }));
        }
    };

    return (
        <nav aria-label="Progress">
            <ol className="max-w-7xl mx-auto space-y-4 md:flex md:space-y-0 md:space-x-8">
                {steps.map((step) => (
                    <li key={step.name} className="md:flex-1">
                        {step.id < signUpStep ? (
                            <div
                                onClick={() => handleChangeStep(step.id)}
                                className="cursor-pointer group pl-4 py-2 flex flex-col border-l-4 border-violet hover:border-violet-dark md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                            >
                                <span className="text-xs text-violet font-semibold tracking-wide uppercase group-hover:text-violet-dark">
                                    {step.id}
                                </span>
                                <span className="text-sm font-medium">
                                    {step.name}
                                </span>
                            </div>
                        ) : step.id === signUpStep ? (
                            <div
                                onClick={() => handleChangeStep(step.id)}
                                className="pl-4 py-2 flex flex-col border-l-4 border-violet md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                                aria-current="step"
                            >
                                <span className="text-xs text-violet font-semibold tracking-wide uppercase">
                                    {step.id}
                                </span>
                                <span className="text-sm font-medium">
                                    {step.name}
                                </span>
                            </div>
                        ) : (
                            <div className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase">
                                    {step.id}
                                </span>
                                <span className="text-sm font-medium">
                                    {step.name}
                                </span>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default StepTracker;
