import React from 'react'
import { TextInput, Edit, SimpleForm } from 'react-admin'
import OrderFields from './OrderFields'

function OrderEdit(props) {
  return (
    <Edit title={<OrderTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <OrderFields />
      </SimpleForm>
    </Edit>
  )
}

const OrderTitle = ({ record }) => {
  return <span>Order {record ? `${record.id}` : ''}</span>
}

export default OrderEdit
