import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'

const errorTextColor = 'red-500'

function ShaharCheckboxField({ label, placeholder, ...props }) {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <div
      className={`text-center mb-1 ${
        errorText && 'p-1 border-2 border-dashed border-' + errorTextColor
      }`}
    >
      <div>
        <div className="flex items-center space-x-2">
          <label>{label}</label>
          <Field {...field} type="checkbox" />
        </div>
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

export default ShaharCheckboxField
