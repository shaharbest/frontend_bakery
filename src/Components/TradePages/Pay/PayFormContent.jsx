import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import ShaharTextField from '../../Utils/ShaharTextField'
import ShaharCheckboxField from './ShaharCheckboxField'
import PayFormButtons from './PayFormButtons'
import PayErrorsSummary from './PayErrorsSummary'

const validationSchema = yup.object({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  streetName: yup.string().required('street name is required'),
  streetNum: yup
    .number()
    .integer('only integer')
    .required('street number is required'),
  apartmentNum: yup.number().integer('only integer'),
  city: yup.string().required('city is required'),
  comment: yup.string(),
  phone: yup
    .string()
    .matches(/^[0-9]{9}$/, { message: 'only format 000-0000' })
    .required('phone number is required'),
  email: yup.string().email('not valid email').required('email is required'),
  agree: yup.bool().oneOf([true], 'Field must be checked'),
})

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  streetName: '',
  streetNum: '',
  apartmentNum: '',
  city: '',
  comment: '',
  agree: false,
  // firstName: "Shahar",
  // lastName: "Best",
  // streetName: "Ogen",
  // streetNum: "4",
  // apartmentNum: "11",
  // city: "Tirat Carmel",
  // comment: "fafa",
  // phone: "036315765",
  // email: "bestshahar9@gmail.com",
  // agree: true,
}

function PayFormContent() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true)
        console.log(data)
        setSubmitting(false)
      }}
    >
      {({ values, errors, isSubmitting, handleSubmit, isValid, touched }) => (
        <div className="space-y-1 flex flex-col items-center">
          {!isValid && (
            <div className="w-72">
              <PayErrorsSummary touched={touched} errors={errors} />
            </div>
          )}

          <Form className="flex flex-col items-center gap-1">
            <NameInputs />
            <ContactInput />
            <AddressInput />
            <Field
              name="comment"
              className="text-center"
              placeholder="comment"
              as="textarea"
            />
            <ShaharCheckboxField
              label={'agree receiving info: '}
              name="agree"
              type="checkbox"
            />
            <PayFormButtons isSubmitting={isSubmitting} />
          </Form>
        </div>
      )}
    </Formik>
  )
}

function AddressInput() {
  return (
    <>
      <ShaharTextField
        name="streetName"
        placeholder="street name"
        type="text"
      />
      <ShaharTextField
        name="streetNum"
        placeholder="street number"
        type="text"
      />
      <ShaharTextField
        name="apartmentNum"
        placeholder="apartment number"
        type="text"
      />
      <ShaharTextField name="city" placeholder="city" type="text" />
    </>
  )
}

function ContactInput() {
  return (
    <>
      <ShaharTextField
        name="email"
        placeholder="youremail@domain.com"
        type="text"
      />
      <ShaharTextField name="phone" placeholder="123-1234" type="text" />
    </>
  )
}

function NameInputs() {
  return (
    <>
      <ShaharTextField name="firstName" placeholder="first name" type="text" />
      <ShaharTextField name="lastName" placeholder="last name" type="text" />
    </>
  )
}

export default PayFormContent
