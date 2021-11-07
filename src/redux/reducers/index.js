import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productListReducer from './productListReducer'
import productGroupListReducer from './productGroupListReducer'
import categoriesListReducer from './productListReducer'
import productDetailsReducer from './productDetailsReducer'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './userReducer'
import couponReducer from './couponReducer'
import blogPostListReducer from './blogPostListReducer'
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
  blogPostList: blogPostListReducer,
  productGroupList: productGroupListReducer,
  categoriesList: categoriesListReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})
