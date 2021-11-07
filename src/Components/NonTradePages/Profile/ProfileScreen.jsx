import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserDetails,
  updateUserProfile,
} from '../../../redux/actions/userActions'

function ProfileScreen({ location, history }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
      if (!user.firstName) {
        dispatch(getUserDetails('profile'))
      } else {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = e => {
    e.preventDefault()
    if (password !== confirmPassword) console.log('not same password')
    else {
      dispatch(
        updateUserProfile({
          id: user._id,
          firstName,
          lastName,
          email,
          password,
        })
      )
    }
  }

  return (
    <div className="py-2 flex flex-col gap-2">
      <h1>User Profile</h1>
      {error && <h2>{error.data}</h2>}
      {success && <h2>Profile Updated</h2>}
      {loading && <h2>loading</h2>}
      <div className="flex flex-col gap-2 w-52 mx-auto">
        <RegisterField
          type="text"
          placeholder="first name"
          setFunction={setFirstName}
          value={firstName}
        />
        <RegisterField
          type="text"
          placeholder="last name"
          setFunction={setLastName}
          value={lastName}
        />
        <RegisterField
          type="text"
          placeholder="email"
          setFunction={setEmail}
          value={email}
        />
        <RegisterField
          type="password"
          placeholder="password"
          setFunction={setPassword}
          value={password}
        />
        <RegisterField
          type="password"
          placeholder="confirm password"
          setFunction={setConfirmPassword}
          value={confirmPassword}
        />
        <button className="btn" onClick={submitHandler}>
          update
        </button>
      </div>
    </div>
  )
}

function RegisterField({ type, placeholder, setFunction, value }) {
  return (
    <input
      className="text-center"
      type={type}
      placeholder={placeholder}
      onChange={e => setFunction(e.target.value)}
      value={value}
    />
  )
}

export default ProfileScreen
