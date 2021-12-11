import React from 'react';
import FormHeader from './formComponents/formHeader';
import FormTextArea from './formComponents/formTextArea';
import FormRadio from './formComponents/formRadio';
import FormText from './formComponents/formText';
import FormCheckboxes from './formComponents/formCheckboxes';

const Form: React.FC<any> = ({ form, setForm }) => {
    return (
        <div className="flex justify-center my-4">
            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        {form.Elements.map((element: any, index: number) => {
                            if (element.type === 'Header') {
                                return (
                                    <FormHeader
                                        key={index}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Text Area') {
                                return (
                                    <FormTextArea
                                        key={index}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Radio Buttons') {
                                return (
                                    <FormRadio
                                        key={index}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Text') {
                                return (
                                    <FormText
                                        key={index}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Checkboxes') {
                              return (
                                  <FormCheckboxes
                                      key={index}
                                      name={form.name}
                                      element={element}
                                      setForm={setForm}
                                  />
                              );
                          }
                            return <h1>Error {element.type}</h1>;
                        })}
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
