import axios from 'axios'
import * as actions from '../actionTypes/productGroupList'
import { getApiUrl } from '../../config/api'

export const listProductGroups = () => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_GROUP_LIST_REQUEST })
    const { data } = await axios.get(`${getApiUrl()}/productGroups`)
    dispatch({ type: actions.PRODUCT_GROUP_LIST_SUCCESS, payload: data })
  } catch (err) {
    let errorField

    if (err.response) {
      errorField = err.response.data.message
        ? err.response.data.message
        : err.response
    } else {
      errorField = err.message
    }

    dispatch({
      type: actions.PRODUCT_GROUP_LIST_FAIL,
      payload: errorField,
    })
  }
}
