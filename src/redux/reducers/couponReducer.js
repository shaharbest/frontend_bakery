import * as actions from '../actionTypes/coupon'

function couponReducer(state = false, action) {
  switch (action.type) {
    case actions.TURN_COUPON_ON:
      return true
    case actions.TURN_COUPON_OFF:
      return false
    default:
      return state
  }
}

export default couponReducer
