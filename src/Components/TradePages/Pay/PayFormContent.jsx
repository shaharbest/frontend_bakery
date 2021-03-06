import React from 'react'
import { Formik, Form, Field } from 'formik'
import ShaharTextField from '../../Utils/ShaharTextField'
import ShaharCheckboxField from './ShaharCheckboxField'
import PayFormButtons from './PayFormButtons'
import PayErrorsSummary from './PayErrorsSummary'
import validationSchema from './validationSchema'

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

  // firstName: 'userInfo.firstName',
  // lastName: userInfo.lastName,
  // phone: userInfo.phone,
  // email: userInfo.email,
  // streetName: userInfo.streetName,
  // streetNum: userInfo.streetNum,
  // apartmentNum: '',
  // city: userInfo.city,
}

function PayFormContent() {
  // const userLogin = useSelector(state => state.userLogin)
  // const { userInfo } = userLogin

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

function NameInputs() {
  return (
    <>
      <ShaharTextField
        name="firstName"
        placeholder="first name"
        type="text"
        fieldAdditionaClass="text-center"
      />
      <ShaharTextField
        name="lastName"
        placeholder="last name"
        type="text"
        fieldAdditionaClass="text-center"
      />
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
        fieldAdditionaClass="text-center"
      />
      <ShaharTextField
        name="phone"
        placeholder="123-1234"
        type="text"
        fieldAdditionaClass="text-center"
      />
    </>
  )
}

function AddressInput() {
  return (
    <>
      <ShaharTextField
        name="streetName"
        placeholder="street name"
        type="text"
        fieldAdditionaClass="text-center"
      />
      <ShaharTextField
        name="streetNum"
        placeholder="street number"
        type="text"
        fieldAdditionaClass="text-center"
      />
      <ShaharTextField
        name="apartmentNum"
        placeholder="apartment number"
        type="text"
        fieldAdditionaClass="text-center"
      />
      <ShaharTextField
        fieldAdditionaClass="text-center"
        name="city"
        placeholder="city"
        type="text"
      />
    </>
  )
}

export default PayFormContent
