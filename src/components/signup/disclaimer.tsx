function Disclaimer() {
    return (
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div
                    className="relative h-full text-lg max-w-prose mx-auto"
                    aria-hidden="true"
                ></div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                            Disclaimer
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Ensuring Success for Everyone
                        </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8">
                        Before you begin your submission to Inclusive Care
                        Colorado, here is some information that will help set
                        you up for success. Your profile will save any progress
                        you make on your submission and you’re welcome to come
                        back at a later date to finish.
                    </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                    <p>
                        Our questionnaire is designed to provide our users with
                        a fully transparent view into the responses that you
                        input into this form. <strong>Please be aware</strong>{' '}
                        that all your responses will be visible for all users;
                        taking the time to use full sentences and correct
                        grammar will improve your profile.
                    </p>
                    <p>
                    None of the questions on this form are mandatory, this decision was made to provide you the option to submit the form and return to it later to fill it out in its entirety. We encourage you to fill out as much as you are able to before submitting your questionnaire as blank answers may be perceived by users as an answer.
                    </p>
                    <p>
                    Users will be able to see the date in which you filled out your latest version of the questionnaire and you will receive an annual email advising you to adjust your answers to best reflect your dedication to providing safe and affirming care.

                    </p>
                    <p>
                    It is encouraged that you answer honestly and transparently. We ask providers about their competence with different communities and realize that not every provider has expertise across all identities. You are not required to have expertise across all LGBTQ identities and PLHIV in order to be listed in this directory.
                    </p>
                    <p>
                    This resource is for providers that are willing and able to provide safe and affirming care to the LGBTQ and PLHIV communities. <strong>Please note</strong>{' '} that being willing to provide care does not mean that you’re able to provide the competent care needed. It’s advised you have completed training with reputable providers.

                    </p>
                    <p>
                    Here are some things you can have on hand to speed up the process of your submission.

                    </p>
                    <ul>
                        <li>
                        Copies of your paperwork - anything a patient might need to sign or view.
                        </li>
                        <li>
                        Information about the training you and your staff have received.
                        </li>
                        <li>A head shot.</li>
                    </ul>

                    <p>
                    You can follow this link [link to glossary] to find a small glossary of terms that we use throughout our questionnaire.
                    </p>
                    <p>
                    You can follow this link [link to resources] to find resources on providers for training in these areas. (Please be patient as we build our training resources out over time and please let us know if you’d like to submit a reputable provider)
                    </p>
                    <blockquote>
                        <p>
                        This is a directory of competent and affirming providers. Tolerance is not affirmation.
                        </p>
                        LGBTQ community member
                    </blockquote>
                    <Checkbox />
                </div>
            </div>
        </div>
    );
}

export function Checkbox() {
    return (
        <fieldset className="space-y-5">
            <legend className="sr-only">Notifications</legend>
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                    >
                        Confirm
                    </label>
                    <p id="comments-description" className="text-gray-500">
                        I have read and agree to the Terms of Service and
                        Privacy Policy.
                    </p>
                </div>
            </div>
        </fieldset>
    );
}

export default Disclaimer;
