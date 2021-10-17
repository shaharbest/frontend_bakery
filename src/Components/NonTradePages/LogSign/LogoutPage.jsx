import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'

function LogoutPage() {
  const { logout } = useAuth()

  async function handleLogout() {
    try {
      await logout()
    } catch {
      console.log('failed to logout')
    }
  }

  return (
    <div className="flex justify-center">
      <button onClick={handleLogout} className="btn">
        logout
      </button>
    </div>
  )
}

export default LogoutPage
