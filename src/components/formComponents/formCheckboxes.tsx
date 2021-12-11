import React from 'react';

function FormCheckboxes({ element, setFormData }: any) {
    return (
        <fieldset className="space-y-5 mb-4">
            <legend className="sr-only">{element.label}</legend>
            <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                <div className="pt-6 sm:pt-5">
                    <div role="group" aria-labelledby="label-email">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                            <div>
                                <div
                                    className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                                    id="label-email"
                                >
                                    {element.label}
                                </div>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg space-y-4">
                                    {element.Options.map((option: any) => (
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-violet-light h-4 w-4 text-violet border-gray-300 rounded"
                                                    checked={option.value}
                                                    onChange={(e) => setFormData((prev: any) => ({ ...prev}))}
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
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

export default FormCheckboxes;
