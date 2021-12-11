import React from 'react';

function FormText({ element }: any) {
    return (
        <div className="mb-4">
            <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
            >
                {element.label}
            </label>
            <div className="mt-1">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-violet-light focus:border-violet-light block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                />
            </div>
        </div>
    );
}

export default FormText;
