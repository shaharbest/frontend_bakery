import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import FormikControl from '../../Utils/Formik/FormikControl'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actions/userActions'
import * as Yup from 'yup'

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
})

function LoginScreen({ location, history }) {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.splite('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  // const submitHandler = e => {
  //   e.preventDefault()
  //   dispatch(login(email, password))
  // }

  const onSubmit = values => {
    const { email, password } = values
    dispatch(login(email, password))
  }

  return (
    <div>
      <h1>Log In</h1>
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        <h2>{error.data}</h2>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (
              <Form className="flex flex-col items-center gap-1">
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <button
                  className="btn"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
              </Form>
            )
          }}
        </Formik>
      )}
      <Link to="/register" className="text-center border block w-36 mx-auto">
        register
      </Link>
    </div>
  )
}

export default LoginScreen
