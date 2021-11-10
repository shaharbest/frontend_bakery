import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import FormikControl from '../../Utils/Formik/FormikControl'
import {
  getUserDetails,
  updateUserProfile,
} from '../../../redux/actions/userActions'

import { isEmpty } from 'lodash'
import validationSchema from './validationSchema'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  streetName: '',
  streetNumber: '',
  apartmentNumber: '',
  postalCode: '',
  // city: '',
}

function ProfileScreen({ history }) {
  const [formValues, setFormValues] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (isEmpty(user)) {
        dispatch(getUserDetails('profile'))
      } else {
        setFormValues({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          streetName: user.streetName,
          streetNumber: user.streetNumber,
          apartmentNumber: user.apartmentNumber,
          postalCode: user.postalCode,
          // city: user.city.name,
        })
      }
    }
  }, [dispatch, history, userInfo, user])

  const onSubmit = values => {
    const {
      firstName,
      lastName,
      email,
      phone,
      streetName,
      streetNumber,
      apartmentNumber,
      postalCode,
      // city,
    } = values
    dispatch(
      updateUserProfile({
        id: user._id,
        firstName,
        lastName,
        email,
        phone,
        streetName,
        streetNumber,
        apartmentNumber,
        postalCode,
        // city,
      })
    )
  }

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        {error && <h2>{error.data}</h2>}
        {success && <h2>Profile Updated</h2>}
        {loading && <h2>loading</h2>}

        <Formik
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {formik => {
            return (
              <Form className="flex flex-col items-center gap-1">
                <ProfileFormControl />
                <button
                  className="btn"
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  update
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

function ProfileFormControl() {
  return (
    <>
      <FormikControl
        control="input"
        type="text"
        label="first name"
        name="firstName"
      />
      <FormikControl
        control="input"
        type="text"
        label="last name"
        name="lastName"
      />
      <FormikControl control="input" type="email" label="email" name="email" />
      <FormikControl control="input" type="text" label="phone" name="phone" />
      <FormikControl
        control="input"
        type="text"
        label="street name"
        name="streetName"
      />
      <FormikControl
        control="input"
        type="text"
        label="street number"
        name="streetNumber"
      />
      <FormikControl
        control="input"
        type="text"
        label="apartment number"
        name="apartmentNumber"
      />
      <FormikControl
        control="input"
        type="text"
        label="postal code"
        name="postalCode"
      />
      {/* <FormikControl control="input" type="text" label="city" name="city" /> */}
    </>
  )
}

export default ProfileScreen
