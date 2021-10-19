import React from 'react'

import { Admin } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import { createHashHistory } from 'history'

import { authProvider, httpClient } from './Utils/authProvider'

import UserResource from './Resources/Users/UserResource'
import BlogPostResource from './Resources/BlogPosts/BlogPostResource'
import CityResource from './Resources/Cities/CityResource'
import CategoryResource from './Resources/Categories/CategoryResource'
import CouponTypeResource from './Resources/CouponType/CouponTypeResource'
import ProductResource from './Resources/Products/ProductResource'
import CouponResource from './Resources/Coupons/CouponResource'
import OrderResource from './Resources/Orders/OrderResource'

import { getApiUrl } from '../../../config/api'

import { createTheme } from '@mui/material/styles'

import Dashboard from './Basic/Dashboard'
import MyLayout from './Basic/MyLayout'

const history = createHashHistory()

function UsersManagementPage() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <div>
      <Admin
        history={history}
        layout={MyLayout}
        theme={darkTheme}
        authProvider={authProvider}
        dashboard={Dashboard}
        dataProvider={simpleRestProvider(getApiUrl(), httpClient)}
      >
        <UserResource name="users" />
        <ProductResource name="products" />
        <BlogPostResource name="blogPosts" />
        <CouponResource name="coupons" />
        <CityResource name="cities" />
        <CategoryResource name="categories" />
        <OrderResource name="orders" />
        <CouponTypeResource name="couponTypes" />
      </Admin>
    </div>
  )
}

export default UsersManagementPage
