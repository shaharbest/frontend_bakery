import React from 'react'
import SingleComment from './SingleComment'
import { useState } from 'react'

function Comments({ comments }) {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <button className="btn w-48" onClick={() => toggleShow()}>
            {show ? 'hide comments' : 'show comments'}
          </button>
        </div>
        {show &&
          comments.map((curComment) => <SingleComment comment={curComment} />)}
      </div>
    </div>
  )
}

export default Comments
