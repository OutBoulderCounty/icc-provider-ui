import React from 'react';

function FormTextArea({ element }: any) {
    return (
        <div>
            <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
            >
                {element.label}
            </label>
            <div className="mt-1">
                <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={''}
                />
            </div>
        </div>
    );
}

export default FormTextArea;