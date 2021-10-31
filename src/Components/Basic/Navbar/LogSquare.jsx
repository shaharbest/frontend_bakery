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
      className="cursor-pointer text-center flex flex-col items-center relative"
    >
      {getEmailPrefix(email)}
      {active && (
        <LoggedInMenu>
          <Link to="/profile">profile</Link>
          <div onClick={() => dispatch(logout())}>logout</div>
        </LoggedInMenu>
      )}
    </div>
  )
}

function LoggedInMenu({ children }) {
  return (
    <nav className="border absolute top-full w-24 z-10">
      <ul>
        {children.map((curChild) => (
          <li className="hover:bg-gray-600">{curChild}</li>
        ))}
      </ul>
    </nav>
  )
}

function LoginLink() {
  return (
    <Link to="/login">
      <FontAwesomeIcon icon={['fas', 'user']} />
    </Link>
  )
}

function getEmailPrefix(email) {
  return email.slice(0, email.indexOf('@'))
}

export default LogSquare
