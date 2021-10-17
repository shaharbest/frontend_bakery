import React from 'react'
import CouponTypeFields from './CouponTypeFields'
import { SimpleForm, Create } from 'react-admin'

function CouponTypeCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <CouponTypeFields />
      </SimpleForm>
    </Create>
  )
}

export default CouponTypeCreate
