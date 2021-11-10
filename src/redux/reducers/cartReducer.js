import * as actions from '../actionTypes/cart'
import { produce } from 'immer'

function cartReducer(state = [], action) {
  let nextState
  let index

  switch (action.type) {
    case actions.ADD_PRODUCT_UNITS_TO_CART:
      index = state.findIndex(pair => pair[0] === action.payload.productId)

      nextState = produce(state, draft => {
        if (index === -1) {
          draft.push([action.payload.productId, action.payload.unitsCount])
        } else {
          draft[index][1] += action.payload.unitsCount
        }
      })
      return nextState
    case actions.REMOVE_PRODUCT_FROM_CART:
      index = state.findIndex(pair => pair[0] === action.payload.productId)

      if (index === -1) {
        return state
      } else {
        nextState = produce(state, draft => {
          draft.splice(index, 1)
        })
        return nextState
      }
    case actions.RESET_CART:
      nextState = []
      return nextState
    case actions.ASSIGN_PRODUCT_UNIT_COUNT:
      index = state.findIndex(pair => pair[0] === action.payload.productId)

      nextState = produce(state, draft => {
        if (index === -1) {
          draft.push([action.payload.productId, action.payload.unitsCount])
        } else {
          draft[index][1] = action.payload.unitsCount
        }
      })
      return nextState
    // case actions.CART_SAVE_SHIPPING_ADDRESS:
    //   return {
    //     ...state,
    //     shippingAddress: action.payload,
    //   }
    default:
      return state
  }
}

export default cartReducer
