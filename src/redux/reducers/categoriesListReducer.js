import * as actions from '../actionTypes/categoriesList'

const categoriesListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actions.CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] }
    case actions.CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload }
    case actions.CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default productListReducer
