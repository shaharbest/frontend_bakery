import * as actions from '../actionTypes/productDetails'

const productDetailsReducer = (
  state = { product: { otherImages: [] } },
  action
) => {
  switch (action.type) {
    case actions.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case actions.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case actions.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default productDetailsReducer
