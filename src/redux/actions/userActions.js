import axios from 'axios'
import * as actions from '../actionTypes/users'
import { getApiUrl } from '../../config/api'

const login = (email, password) => async dispatch => {
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
    let errorField

    if (error.response) {
      errorField = error.response.data.message
        ? error.response.data.message
        : error.response
    } else {
      errorField = error.message
    }

    dispatch({
      type: actions.USER_LOGIN_FAIL,
      payload: errorField,
    })
  }
}

const logout = () => async dispatch => {
  dispatch({ type: actions.USER_LOGOUT })
}

const register = (firstName, lastName, email, password) => async dispatch => {
  try {
    dispatch({
      type: actions.USER_REGISTER_REQUEST,
    })

    const { data } = await axios.post(
      `${getApiUrl()}/users/register`,
      { firstName, lastName, email, password },
      {
        'Content-Type': 'application/json',
      }
    )

    dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data })
  } catch (error) {
    let errorField

    if (error.response) {
      errorField = error.response.data.message
        ? error.response.data.message
        : error.response
    } else {
      errorField = error.message
    }

    dispatch({
      type: actions.USER_REGISTER_FAIL,
      payload: errorField,
    })
  }
}

const getUserDetails = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const { data } = await axios.get(`${getApiUrl()}/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    })

    dispatch({ type: actions.USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    let errorField

    if (error.response) {
      errorField = error.response.data.message
        ? error.response.data.message
        : error.response
    } else {
      errorField = error.message
    }

    dispatch({
      type: actions.USER_DETAILS_FAIL,
      payload: errorField,
    })
  }
}

const updateUserProfile = user => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.USER_UPDATE_PROFILE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const { data } = await axios.put(`${getApiUrl()}/users/profile`, user, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    })

    dispatch({ type: actions.USER_UPDATE_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    let errorField

    if (error.response) {
      errorField = error.response.data.message
        ? error.response.data.message
        : error.response
    } else {
      errorField = error.message
    }

    dispatch({
      type: actions.USER_UPDATE_PROFILE_FAIL,
      payload: errorField,
    })
  }
}

export { login, logout, register, getUserDetails, updateUserProfile }
