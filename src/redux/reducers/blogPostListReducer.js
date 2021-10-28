import * as actions from '../actionTypes/blogPostList'

const blogPostListReducer = (state = { blogPosts: [] }, action) => {
  switch (action.type) {
    case actions.BLOGPOST_LIST_REQUEST:
      return { loading: true, blogPosts: [] }
    case actions.BLOGPOST_LIST_SUCCESS:
      return { loading: false, blogPosts: action.payload }
    case actions.BLOGPOST_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default blogPostListReducer
