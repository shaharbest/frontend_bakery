import * as Yup from 'yup'

const nameValidator = Yup.string()
  .matches(/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*$/, {
    message: 'Invalid (english only)',
  })
  .max(50, 'too long')
const phoneValidator = Yup.string().matches(
  /^[0][5][0|2|3|4|5|9]{1}[0-9]{7}$/,
  {
    message: 'Invalid (05x-xxxxxxx)',
  }
)
const emailValidator = Yup.string().email('Invalid email')

const serialNumberValidator = Yup.string()
  .matches(/^[1-9]\d*$/, {
    message: 'Invalid',
  })
  .max(4, 'too long')
const postalCodeValidator = Yup.string().matches(/^[0-9]{7}$/, {
  message: 'Invalid (7 digits)',
})

const validationSchema = Yup.object({
  firstName: nameValidator.required('Required'),
  lastName: nameValidator.required('Required'),
  email: emailValidator.required('Required'),
  phone: phoneValidator.required('Required'),
  streetName: nameValidator.required('Required'),
  streetNumber: serialNumberValidator.required('Required'),
  apartmentNumber: serialNumberValidator.required('Required'),
  postalCode: postalCodeValidator.required('Required'),
  // city: Yup.string().required('Required'),
})

export default validationSchema
