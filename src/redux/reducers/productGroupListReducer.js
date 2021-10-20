import * as actions from '../actionTypes/productGroupList'

const productListReducer = (state = { productGroups: [] }, action) => {
  switch (action.type) {
    case actions.PRODUCT_GROUP_LIST_REQUEST:
      return { loading: true, productGroups: [] }
    case actions.PRODUCT_GROUP_LIST_SUCCESS:
      return { loading: false, productGroups: action.payload }
    case actions.PRODUCT_GROUP_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default productListReducer
