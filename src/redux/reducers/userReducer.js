import * as actions from '../actionTypes/users'

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return { loading: true }
    case actions.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actions.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case actions.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export default userLoginReducer
