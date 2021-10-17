import React from 'react'
import PayFormContent from './PayFormContent'
import { useAuth } from '../../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

function PayPage() {
  const { currentUser } = useAuth()

  return (
    <div>
      <h1>Purchase</h1>
      {currentUser ? (
        <div className="mt-3">
          <PayFormContent />
        </div>
      ) : (
        <UserOfferToSignIn />
      )}
    </div>
  )
}

function UserOfferToSignIn() {
  const history = useHistory()

  return (
    <div className="flex flex-col gap-3 my-10">
      <h2>you need to signin for purchasing</h2>
      <div className="flex gap-1 justify-center">
        <button onClick={() => history.push('/login')} className="btn">
          login
        </button>
        <button onClick={() => history.push('/signup')} className="btn">
          signup
        </button>
      </div>
    </div>
  )
}

export default PayPage
