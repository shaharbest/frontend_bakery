import React from 'react'
import UserCard from './UserCard'

function SingleComment({ comment }) {
  return (
    <div className="flex border p-1 m-1 gap-1">
      <UserCard userId={comment.userId} />
      <div className="bg-d3 w-full p-1">{comment.content}</div>
    </div>
  )
}

export default SingleComment