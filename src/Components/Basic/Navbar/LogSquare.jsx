import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/actions/userActions'

function LogSquare() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return userInfo ? <LoggedInOptions email={userInfo.email} /> : <LoginLink />
}

function LoggedInOptions({ email }) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive((active) => {
      setActive(!active)
    })
  }

  return (
    <div
      onClick={() => toggleActive()}
      className="text-center flex flex-col items-center relative"
    >
      <FontAwesomeIcon icon={['fas', 'user']} />
      {getEmailPrefix(email)}
      {active && (
        <ul className="absolute top-full bg-d3 w-24 z-10">
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li onClick={() => dispatch(logout())}>logout</li>
        </ul>
      )}
    </div>
  )
}

function LoginLink() {
  return (
    <Link to="/login">
      <div className="text-center flex flex-col items-center">
        <FontAwesomeIcon icon={['fas', 'user']} />
        login
      </div>
    </Link>
  )
}

function getEmailPrefix(email) {
  return email.slice(0, email.indexOf('@'))
}

export default LogSquare
