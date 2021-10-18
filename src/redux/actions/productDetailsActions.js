import axios from 'axios'
import * as actions from '../actionTypes/productDetails'
import { getApiUrl } from '../../config/api'

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`${getApiUrl()}/products/${id}`)
    dispatch({ type: actions.PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: actions.PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.response,
    })
  }
}
