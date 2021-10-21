import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

function LogSquare() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Link to="/login">
      <div className="text-center flex flex-col items-center">
        <FontAwesomeIcon icon={['fas', 'user']} />
        {userInfo ? getEmailPrefix(userInfo.email) : 'login'}
      </div>
    </Link>
  )
}

function getEmailPrefix(email) {
  return email.slice(0, email.indexOf('@'))
}

export default LogSquare
