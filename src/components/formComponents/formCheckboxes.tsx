import React from 'react';

function FormCheckboxes({ element }: any) {
    return (
        <fieldset className="space-y-5">
            <legend className="sr-only">{element.label}</legend>
            <p className="block text-sm font-medium text-gray-700">
                {element.label}
            </p>
            {element.Options.map((option: any) => (
                <>
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
                                {option.name}
                            </label>
                        </div>
                    </div>
                </>
            ))}
        </fieldset>
    );
}

export default FormCheckboxes;
