import React from 'react';
import FormHeader from './formComponents/formHeader';
import FormTextArea from './formComponents/formTextArea';
import FormRadio from './formComponents/formRadio';
import FormText from './formComponents/formText';
import FormCheckboxes from './formComponents/formCheckboxes';
import FormNumber from './formComponents/formNumber';

const Form: React.FC<any> = ({ form, setForm }) => {
    return (
        <div className="flex justify-center my-4">
            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        {form.Elements.map((element: any) => {
                            if (element.type === 'Header') {
                                return (
                                    <FormHeader
                                        key={element.id}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Text Area') {
                                return (
                                    <FormTextArea
                                        key={element.id}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Radio Buttons') {
                                return (
                                    <FormRadio
                                        key={element.id}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Text') {
                                return (
                                    <FormText
                                        key={element.id}
                                        name={form.name}
                                        element={element}
                                        setForm={setForm}
                                    />
                                );
                            } else if (element.type === 'Checkboxes') {
                              return (
                                  <FormCheckboxes
                                      key={element.id}
                                      name={form.name}
                                      element={element}
                                      setForm={setForm}
                                  />
                              );
                          } else if (element.type === 'Number') {
                            return (
                                <FormNumber
                                    key={element.id}
                                    name={form.name}
                                    element={element}
                                    setForm={setForm}
                                />
                            );
                        }
                            return <h1 key={element.id}>Error {element.type}</h1>;
                        })}
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light"
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
