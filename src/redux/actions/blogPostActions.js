import axios from 'axios'
import * as actions from '../actionTypes/blogPostList'
import { getApiUrl } from '../../config/api'

export const listBlogPosts = () => async (dispatch) => {
  try {
    dispatch({ type: actions.BLOGPOST_LIST_REQUEST })
    const { data } = await axios.get(`${getApiUrl()}/blogPosts`)
    dispatch({ type: actions.BLOGPOST_LIST_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: actions.BLOGPOST_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.response,
    })
  }
}
