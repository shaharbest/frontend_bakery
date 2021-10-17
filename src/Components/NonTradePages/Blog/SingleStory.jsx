import React from 'react'
import StoryContent from './StoryContent'
import Comments from './Comments'

function SingleStory({ story }) {
  return (
    <div className="p-1 border bg-d1">
      <h2 className="text-right">{story.date}</h2>
      <h1 className="p-0 pb-3">{story.title}</h1>
      <div>
        <img className="w-56 mx-auto" src={story.pic_path} alt="single story" />
      </div>
      <StoryContent content={story.story} />
      <Comments comments={story.comments} />
    </div>
  )
}

export default SingleStory
