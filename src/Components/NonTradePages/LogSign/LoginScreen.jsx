import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actions/userActions'

function LoginScreen({ location, history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.splite('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = e => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className="py-2 flex flex-col gap-2">
      <h1>Log In</h1>
      {error && <h2>{error.data}</h2>}
      {loading && <h2>loading</h2>}
      <div className="flex flex-col gap-2 w-52 mx-auto">
        <input
          className="text-center"
          type="text"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="text-center"
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn" onClick={submitHandler}>
          submit
        </button>
      </div>
      <Link to="/register" className="text-center border block w-36 mx-auto">
        register
      </Link>
    </div>
  )
}

export default LoginScreen
