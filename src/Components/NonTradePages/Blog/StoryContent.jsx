import React from 'react'
import { useState } from 'react'

function StoryContent({ content }) {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div>
      <p
        className={`m-1 overflow-hidden break-normal text-justify max-w-xl mx-auto ${
          !showMore && 'h-16'
        }`}
        onClick={() => setShowMore(true)}
      >
        {content}
      </p>
      <div className="flex justify-center">
        <button
          className="btn m-1 overflow-scrollbtn w-48"
          onClick={() => toggleShowMore()}
        >
          {showMore ? 'show less' : 'show more'}
        </button>
      </div>
    </div>
  )
}

export default StoryContent
