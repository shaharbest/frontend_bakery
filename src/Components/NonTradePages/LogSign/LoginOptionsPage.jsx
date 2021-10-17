import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import LogoutPage from './LogoutPage'

function LoginOptionsPage() {
  const { popUpGoogleAuth, popUpFacebookAuth } = useAuth()
  const history = useHistory()
  const { isAuthenticated } = useAuth()

  return isAuthenticated() ? (
    <LogoutPage />
  ) : (
    <div className="flex flex-col items-center gap-2">
      <button className="btn" onClick={popUpGoogleAuth}>
        google
      </button>
      <button onClick={popUpFacebookAuth} className="btn">
        facebook
      </button>
      <button onClick={() => history.push('/email_login')} className="btn">
        email
      </button>
    </div>
  )
}

export default LoginOptionsPage
