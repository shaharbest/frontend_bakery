import * as actions from '../actionTypes/cart'

export const resetCart = () => ({
  type: actions.RESET_CART,
})

export const assignProductUnitsCount = (productId, unitsCount) => ({
  type: actions.ASSIGN_PRODUCT_UNIT_COUNT,
  payload: {
    productId,
    unitsCount,
  },
})

export const addProductsUnitsToCart = (productId, unitsCount) => ({
  type: actions.ADD_PRODUCT_UNITS_TO_CART,
  payload: {
    productId,
    unitsCount,
  },
})

export const removeProductFromCart = (productId) => ({
  type: actions.REMOVE_PRODUCT_FROM_CART,
  payload: {
    productId,
  },
})
