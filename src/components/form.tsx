import React from 'react'

type FormProps = {
  id: number;
  name: string;
  required: boolean;
  live: false;
}

const Form: React.FC<FormProps> = (form) => {
  return (
    <div>
      {form.name}
    </div>
  )
}

export default Form
