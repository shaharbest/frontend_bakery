import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'

const errorTextColor = 'red-500'

function ShaharTextField({ type, as, placeholder, ...props }) {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <div
      className={`text-center ${
        errorText && 'p-1 border-2 border-dashed border-' + errorTextColor
      }`}
    >
      <div>
        <Field
          {...field}
          placeholder={placeholder}
          type={type}
          className="text-center w-full"
          as={as}
        />
        <ErrorMessage
          name={field.name}
          render={(msg) => (
            <div className={'text-' + errorTextColor}>{msg}</div>
          )}
        />
      </div>
    </div>
  )
}

export default ShaharTextField
