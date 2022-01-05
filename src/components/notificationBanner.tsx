/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon } from '@heroicons/react/outline';

const NotificationBanner = () => {
    // const handleCancelClick = (e: React.SyntheticEvent) => {
    //     e.preventDefault();
    //     window.location.href = '/forms';
    // };

    return (
        <div className="inset-x-0 pb-2 sm:pb-5">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="p-2 rounded-lg bg-violet-light shadow-lg sm:p-3">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-violet-dark">
                                <SpeakerphoneIcon
                                    className="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="md:hidden">
                                    Saving your form responses
                                </span>
                                <span className="hidden md:inline">
                                    Please wait... Saving form responses...
                                </span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"></div>
                        {/* <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                            <button
                                type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={handleCancelClick}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon
                                    className="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationBanner;
