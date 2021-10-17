import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../../contexts/AuthContext'

function LogSquare() {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <Link to="/login">
      <div className="text-center flex flex-col items-center">
        <FontAwesomeIcon icon={['fas', 'user']} />
        {isAuthenticated() ? getEmailPrefix(currentUser.email) : 'login'}
      </div>
    </Link>
  )
}

function getEmailPrefix(email) {
  return email.slice(0, email.indexOf('@'))
}

export default LogSquare
