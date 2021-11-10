import React from 'react'
import Input from './Control/Input'
import Textarea from './Control/Textarea'
import Select from './Control/Select'
import RadioButtons from './Control/RadioButtons'
import CheckboxGroup from './Control/CheckboxGroup'
// import DatePicker from './Control/DatePicker'

function FormikControl(props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    // case 'date':
    //   return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl
