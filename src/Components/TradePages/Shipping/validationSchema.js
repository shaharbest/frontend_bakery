import * as Yup from 'yup'

const validationSchema = Yup.object({
  streetName: Yup.string().required('Required'),
  streetNumber: Yup.number().required('Required'),
  apartmentNumber: Yup.number().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
})

export default validationSchema
