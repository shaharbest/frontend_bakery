import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../redux/actions/userActions'

function RegisterScreen({ location, history }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.splite('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = e => {
    e.preventDefault()
    if (password !== confirmPassword) console.log('not same password')
    else dispatch(register(firstName, lastName, email, password))
  }

  return (
    <div className="py-2 flex flex-col gap-2">
      <h1>Sign Up</h1>
      {error && <h2>{error.data}</h2>}
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
          register
        </button>
      </div>
      <Link to="/register" className="text-center border block w-36 mx-auto">
        register
      </Link>
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

export default RegisterScreen
