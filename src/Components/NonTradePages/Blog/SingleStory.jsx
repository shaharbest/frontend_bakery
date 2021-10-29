import React from 'react'
import StoryContent from './StoryContent'
import Comments from './Comments'

function SingleStory({ story }) {
  return (
    <section className="p-2 border max-w-xl mx-auto">
      <h4 className="text-right">
        {new Date(story.datePosted).toLocaleDateString('en-GB')}
      </h4>
      <h2>{story.title}</h2>
      <div>
        <img
          className="w-full mx-auto my-1"
          src={story.imagePath}
          alt="single story"
        />
      </div>
      <StoryContent content={story.content} />
      <Comments comments={story.comments} />
    </section>
  )
}

export default SingleStory
