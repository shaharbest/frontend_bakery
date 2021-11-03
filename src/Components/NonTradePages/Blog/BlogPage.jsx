import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBlogPosts } from '../../../redux/actions/blogPostActions'
import SingleStory from './SingleStory'

function BlogPage() {
  const dispatch = useDispatch()

  const { loading, error, blogPosts } = useSelector(
    (state) => state.blogPostList
  )

  useEffect(() => {
    dispatch(listBlogPosts())
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="flex flex-col gap-3">
          {blogPosts.map((curStory) => (
            <SingleStory key={curStory.id} story={curStory} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogPage
