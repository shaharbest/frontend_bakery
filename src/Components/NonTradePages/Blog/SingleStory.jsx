import React from 'react'
import StoryContent from './StoryContent'
import Comments from './Comments'

function SingleStory({ story }) {
  return (
    <div className="p-2 border bg-d1 max-w-xl mx-auto">
      <h3 className="text-right">
        {new Date(story.datePosted).toLocaleDateString('en-GB')}
      </h3>
      <h1>{story.title}</h1>
      <div>
        <img
          className="w-full mx-auto my-1"
          src={story.imagePath}
          alt="single story"
        />
      </div>
      <StoryContent content={story.content} />
      <Comments comments={story.comments} />
    </div>
  )
}

export default SingleStory
