import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import useSession from '../../context/sessionContext';

type Props = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    modalType: string;
};

interface Modal {
  title: string;
  description: string;
  buttonText: string;
}

interface ModalTypes {
  [key: string]: Modal;
}

const modalTypes: ModalTypes = {
  "create": {
    title: 'Account creation successful',
    description: 'Please check your email for a magic link that will log you into the provider dashboard.',
    buttonText: 'Go back to login page'
  },
  "signIn": {
    title: 'Found you!',
    description: 'Please check your email for a magic link that will log you into the provider dashboard.',
    buttonText: 'Close'
  }
}

const CheckEmailModal: React.FC<Props> = ({ modalOpen, setModalOpen, modalType }) => {
    const { setSession } = useSession();

    const handleCreateAccount = () => {
        setModalOpen(false);
        setSession((prev) => ({ ...prev, signUpStep: 1, email: '' }));
    };

    return (
        <Transition.Root show={modalOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setModalOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                    <CheckIcon
                                        className="h-6 w-6 text-green-600"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg leading-6 font-medium text-gray-900"
                                    >
                                        {modalTypes[modalType].title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Please check your email for a magic
                                            link that will log you into the
                                            provider dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-violet text-base font-medium text-white hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light sm:text-sm"
                                    onClick={handleCreateAccount}
                                >
                                    Go back to login
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CheckEmailModal;
