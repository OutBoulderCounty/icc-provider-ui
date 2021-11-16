import React from 'react';

import useSession from '../../context/sessionContext';

const steps = [
    { id: 1, name: 'Provide email', status: 'complete' },
    { id: 2, name: 'Provider success', status: 'current' },
    { id: 3, name: 'Provider information', status: 'upcoming' },
];

const StepTracker: React.FC = () => {
    const { setSession } = useSession();

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
                        {step.status === 'complete' ? (
                            <div
                                onClick={() => handleChangeStep(step.id)}
                                className="cursor-pointer group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                            >
                                <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">
                                    {step.id}
                                </span>
                                <span className="text-sm font-medium">
                                    {step.name}
                                </span>
                            </div>
                        ) : step.status === 'current' ? (
                            <div
                                onClick={() => handleChangeStep(step.id)}
                                className="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                                aria-current="step"
                            >
                                <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase">
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
