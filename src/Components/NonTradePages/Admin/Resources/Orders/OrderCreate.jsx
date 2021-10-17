import React from 'react'
import OrderFields from './OrderFields'
import { SimpleForm, Create } from 'react-admin'

function OrderCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <OrderFields />
      </SimpleForm>
    </Create>
  )
}

export default OrderCreate
