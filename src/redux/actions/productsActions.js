import axios from 'axios'
import * as actions from '../actionTypes/productList'
import { getApiUrl } from '../../config/api'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_LIST_REQUEST })
    const { data } = await axios.get(`${getApiUrl()}/products`)
    dispatch({ type: actions.PRODUCT_LIST_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: actions.PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.response,
    })
  }
}
