import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Loader from './loader'
import { getForm } from '../utils'
import Form from './form'

type FormProps = {
  id: number;
  name: string;
  required: boolean;
  live: false;
}

const FormLoader = () => {
  const { id } = useParams()
  const [form, setForm] = React.useState<FormProps | undefined>()
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!form?.name) {
      (async () => {
        try {
          const form = await getForm(id)
          setForm(form)
        } catch (e) {
          alert(e)
        }
      })();
    }

    setIsLoading(false);
  }, [setIsLoading, form, id])

  if (isLoading) {
    return <Loader />
  }

  const formProps = {form, setForm}

  if (form?.name) {
    return <Form {...formProps} />
  }

  return <Loader />
}

export default FormLoader;
export type { FormProps }