import React from 'react'
import StoryContent from './StoryContent'
import Comments from './Comments'

function SingleStory({ story }) {
  const { datePosted, imagePath, comments } = story

  return (
    <section className="p-2 border max-w-xl mx-auto">
      <h4 className="text-right">
        {new Date(datePosted).toLocaleDateString('en-GB')}
      </h4>
      <div>
        <img
          className="w-full mx-auto my-1"
          src={imagePath}
          alt="single story"
        />
      </div>
      <StoryContent story={story} />
      <Comments comments={comments} />
    </section>
  )
}

export default SingleStory
