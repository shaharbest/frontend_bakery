import axios from 'axios'
import * as actions from '../actionTypes/categoriesList'

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: actions.CATEGORY_LIST_REQUEST })
    const { data } = await axios.get('/products')
    dispatch({ type: actions.CATEGORY_LIST_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: actions.CATEGORY_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.response,
    })
  }
}
