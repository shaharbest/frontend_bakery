import React from 'react'
import * as yup from 'yup'
import LogSignForm from './LogSignForm'
import FormEntry from './FormEntry'
// import { useAuth } from '../../../contexts/AuthContext'

function SignupPage() {
  // const { signup } = useAuth()

  async function handleSubmitData(data) {
    // try {
    //   await signup(data.email, data.password)
    // } catch {
    //   console.log('failed to create an account')
    // }
  }

  return (
    <LogSignForm
      title="Sign Up"
      initialValues={signupInitialValues}
      validationSchema={signupValidationSchema}
      handleSubmitData={handleSubmitData}
    >
      <FormEntry label="Email" name="email" />
      <FormEntry label="Password" name="password" type="password" />
      <FormEntry
        label="Password Confirm"
        name="passwordConfirm"
        type="password"
      />
    </LogSignForm>
  )
}

const signupValidationSchema = yup.object({
  email: yup.string().email('not valid email').required('email is required'),
  password: yup.string().required('password is required').min(6),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const signupInitialValues = {
  // email: "",
  // password: "",
  // passwordConfirm: "",
  email: 'stam@gmail.com',
  password: '123456',
  passwordConfirm: '123456',
}

export default SignupPage
