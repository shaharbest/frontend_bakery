import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { isEmpty } from 'lodash'

import { getUserDetails } from '../../../redux/actions/userActions'
import ShippingControls from './ShippingControls'
import validationSchema from './validationSchema'

const initialValues = {
  streetName: '',
  streetNumber: '',
  apartmentNumber: '',
  city: '',
  postalCode: '',
}

let userValues = null

const onSubmit = (values, onSubmitProps) => {
  // dispatch
  console.log('submit')
  console.log('values:', values)
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()
}

function ShippingScreen({ history }) {
  const [formValues, setFormValues] = useState(null)
  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (isEmpty(user)) {
        dispatch(getUserDetails('profile'))
      } else {
        userValues = {
          streetName: user.streetName,
          streetNumber: user.streetNumber,
          apartmentNumber: user.apartmentNumber,
          city: user.city.name,
          postalCode: user.postalCode,
        }
      }
    }
  }, [dispatch, history, userInfo, user])

  return loading ? (
    <h2>loading</h2>
  ) : error ? (
    <h2>error</h2>
  ) : (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formik => {
        return (
          <Form className="flex flex-col items-center gap-1">
            <ShippingControls />
            <div className="flex">
              <button
                className="btn"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                submit
              </button>
              <button
                onClick={() => setFormValues(null)}
                className="btn"
                type="reset"
              >
                reset
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => setFormValues(userValues)}
              >
                load my address
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ShippingScreen
