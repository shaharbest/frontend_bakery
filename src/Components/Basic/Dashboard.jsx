import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

function Dashboard(props) {
  const { currentUser } = useAuth()

  return (
    <div className="flex flex-col items-center">
      <h1 className="">Dashboard</h1>
      <div>{currentUser.email}</div>
    </div>
  )
}

export default Dashboard
