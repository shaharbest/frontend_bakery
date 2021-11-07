import React from 'react'
import * as yup from 'yup'
import LogSignForm from './LogSignForm'
import FormEntry from './FormEntry'
// import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function SimpleEmailLogin() {
  const history = useHistory()
  // const { login } = useAuth()

  async function handleSubmitLogin(data) {
    // try {
    //   await login(data.email, data.password)
    //   history.push('/somewhere')
    // } catch {
    //   console.log('failed to login')
    // }
  }

  return (
    <div>
      <LogSignForm
        title="Login"
        initialValues={signupInitialValues}
        validationSchema={signupValidationSchema}
        handleSubmitData={data => handleSubmitLogin(data)}
      >
        <FormEntry label="Email" name="email" />
        <FormEntry label="Password" name="password" type="password" />
      </LogSignForm>
      <div className="flex justify-center">
        <Link to="/signup">signup</Link>
      </div>
    </div>
  )
}

const signupValidationSchema = yup.object({
  email: yup.string().email('not valid email').required('email is required'),
  password: yup.string().required('password is required'),
})

const signupInitialValues = {
  email: '',
  password: '',
}

export default SimpleEmailLogin
