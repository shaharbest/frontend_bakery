import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productListReducer from './productListReducer'
import productGroupListReducer from './productGroupListReducer'
import categoriesListReducer from './productListReducer'
import productDetailsReducer from './productDetailsReducer'
import couponReducer from './couponReducer'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
import { adminReducer } from 'react-admin'

const history = createBrowserHistory()

export default combineReducers({
  cart: cartReducer,
  coupon: couponReducer,
  admin: adminReducer,
  router: connectRouter(history),
  productList: productListReducer,
  productGroupList: productGroupListReducer,
  categoriesList: categoriesListReducer,
  productDetails: productDetailsReducer,
})
