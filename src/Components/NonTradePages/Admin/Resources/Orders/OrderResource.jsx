import React from 'react'
import { Resource } from 'react-admin'
import OrderList from './OrderList'
import OrderEdit from './OrderEdit'
import OrderCreate from './OrderCreate'
import OrderIcon from '@material-ui/icons/Money'

function OrderResource(props) {
  return (
    <Resource
      icon={OrderIcon}
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
      {...props}
    />
  )
}

export default OrderResource
