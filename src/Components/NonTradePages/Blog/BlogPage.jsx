import React from 'react'
import { getBlogStories } from '../../../DataBaseAccess'
import SingleStory from './SingleStory'

function BlogPage() {
  return (
    <div className="bg-d2 p-3 flex flex-col gap-3">
      {getBlogStories().map((curStory) => (
        <SingleStory key={curStory.id} story={curStory} />
      ))}
    </div>
  )
}

export default BlogPage
