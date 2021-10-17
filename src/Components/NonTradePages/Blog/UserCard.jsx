import React from 'react'
import { getUserById } from '../../../DataBaseAccess'

function UserCard({ userId }) {
  const user = getUserById(userId)
  return (
    <div>
      <div className="w-20 h-24">
        <img
          className="h-20 mx-auto"
          src={user.profile_pic_path}
          alt="user card"
        />
      </div>
      <div className="text-center">{user.name}</div>
    </div>
  )
}

export default UserCard
