import React from 'react'

function UserCard({ userId }) {
  return (
    <div>
      <img
        className="h-20 mx-auto"
        src={userId.avatarImagePath}
        alt="user card"
      />
      <div className="text-center">{userId.firstName}</div>
    </div>
  )
}

export default UserCard
