import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/actions/userActions'

function LogSquare() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  return userInfo ? <LoggedInOptions name={userInfo.name} /> : <LoginLink />
}

function LoggedInOptions({ name }) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(active => {
      setActive(!active)
    })
  }

  return (
    <div
      onClick={() => toggleActive()}
      className="cursor-pointer text-center flex flex-col items-center relative"
    >
      {name}
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
        {children.map((curChild, index) => (
          <li key={index} className="hover:bg-gray-600">
            {curChild}
          </li>
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

export default LogSquare
