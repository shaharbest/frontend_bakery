import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
  const { label, name, ...rest } = props
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field className="px-1 text-center" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input
