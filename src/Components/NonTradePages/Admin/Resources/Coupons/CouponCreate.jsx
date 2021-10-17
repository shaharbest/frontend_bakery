import React from 'react'
import CouponFields from './CouponFields'
import { SimpleForm, Create } from 'react-admin'

function CouponCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <CouponFields />
      </SimpleForm>
    </Create>
  )
}

export default CouponCreate
