import axios from 'axios'
import * as actions from '../actionTypes/users'
import { getApiUrl } from '../../config/api'

const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_LOGIN_REQUEST,
    })

    const { data } = await axios.post(
      `${getApiUrl()}/users/login`,
      { email, password },
      {
        'Content-Type': 'application/json',
      }
    )

    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

const logout = () => async (dispatch) => {
  dispatch({ type: actions.USER_LOGOUT })
}

export { login, logout }
