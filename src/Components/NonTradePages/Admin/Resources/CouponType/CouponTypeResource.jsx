import React from 'react'
import { Resource } from 'react-admin'
import CouponTypeList from './CouponTypeList'
import CouponTypeEdit from './CouponTypeEdit'
import CouponTypeCreate from './CouponTypeCreate'
import CouponTypeIcon from '@material-ui/icons/Money'

function CouponTypeResource(props) {
  return (
    <Resource
      icon={CouponTypeIcon}
      list={CouponTypeList}
      edit={CouponTypeEdit}
      create={CouponTypeCreate}
      {...props}
    />
  )
}

export default CouponTypeResource
