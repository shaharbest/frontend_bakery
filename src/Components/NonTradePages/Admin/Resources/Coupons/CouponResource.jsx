import React from 'react'
import { Resource } from 'react-admin'
import CouponList from './CouponList'
import CouponEdit from './CouponEdit'
import CouponCreate from './CouponCreate'
import CouponIcon from '@material-ui/icons/Money'

function CouponResource(props) {
  return (
    <Resource
      icon={CouponIcon}
      list={CouponList}
      edit={CouponEdit}
      create={CouponCreate}
      {...props}
    />
  )
}

export default CouponResource
