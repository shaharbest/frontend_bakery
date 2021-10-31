import React from 'react'
import { useState } from 'react'

function StoryContent({ story }) {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const { title, content } = story

  return (
    <div>
      <article>
        <h2>{title}</h2>
        <p
          className={`m-1 overflow-hidden break-normal text-justify max-w-xl mx-auto ${
            !showMore && 'h-16'
          }`}
          onClick={() => setShowMore(true)}
        >
          {content}
        </p>
      </article>
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
