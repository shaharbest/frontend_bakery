import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  streetName: Yup.string().required('street name is required'),
  streetNum: Yup.number()
    .integer('only integer')
    .required('street number is required'),
  apartmentNum: Yup.number().integer('only integer'),
  city: Yup.string().required('city is required'),
  comment: Yup.string(),
  phone: Yup.string()
    .matches(/^[0-9]{9}$/, { message: 'only format 000-0000' })
    .required('phone number is required'),
  email: Yup.string().email('not valid email').required('email is required'),
  agree: Yup.bool().oneOf([true], 'Field must be checked'),
})

export default validationSchema
