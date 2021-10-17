import * as actions from '../actionTypes/cart'
import { produce } from 'immer'

function cartReducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT_UNITS_TO_CART:
      const { productId, unitsCount } = action.payload
      return produce(state, (draft) => {
        draft[productId] =
          (state[productId] ? state[productId] : 0) + unitsCount
      })
    case actions.REMOVE_PRODUCT_FROM_CART:
      const { [action.payload.productId]: removedProperty, ...restObj } = state
      return restObj
    case actions.ASSIGN_CONTENT_TO_CART:
      return { ...action.payload.cart }
    case actions.RESET_CART:
      return {}
    case actions.ASSIGN_PRODUCT_UNIT_COUNT:
      return produce(state, (draft) => {
        draft[action.payload.productId] = action.payload.unitsCount
      })
    default:
      return state
  }
}

export default cartReducer
