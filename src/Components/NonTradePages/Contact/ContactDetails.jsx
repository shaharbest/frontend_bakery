import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import ContactFormContant from './ContactFormContant'
import ContactInfo from './ContactInfo'
import SocialMediaIcons from './SocialMediaIcons'
import { useAuth } from '../../../contexts/AuthContext'

function ContactDetails() {
  const { isAuthenticated, currentUser } = useAuth()

  const initialValues = {
    fullName: '',
    email: '',
    comment: '',
  }

  if (isAuthenticated()) {
    initialValues.email = currentUser.email
  }

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
        <Form>
          <div className="text-center grid grid-cols-1 md:grid-cols-2 md:border-t md:border-l p-5 gap-5">
            <div className="order-1">
              <ContactFormContant />
            </div>
            <div className="order-3 md:order-2">
              <ContactInfo />
            </div>
            <div className="order-2 md:order-3">
              <FormButtonDiv />
            </div>
            <div className="order-4">
              <SocialMediaIcons />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

function FormButtonDiv() {
  return (
    <div className="flex justify-center">
      <button type="submit" className="btn self-center">
        Contact Us
      </button>
    </div>
  )
}

const validationSchema = yup.object({
  fullName: yup.string().required('first name is required'),
  email: yup.string().email('not valid email').required('email is required'),
  message: yup.string().required('write something'),
})

export default ContactDetails
