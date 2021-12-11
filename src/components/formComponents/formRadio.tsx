import React from 'react'

function FormRadio({ element }: any) {



  return (
    <div>
      <label className="text-base font-medium text-gray-900">{element.label}</label>
      {/* <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p> */}
      <fieldset className="mt-4">
        <legend className="sr-only">Radio button options for {element.label}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {element.Options.map((option: any) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name="notification-method"
                type="radio"
                defaultChecked={option.id === 'email'}
                className="focus:ring-violet-light h-4 w-4 text-violet border-gray-300"
              />
              <label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700">
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default FormRadio;
