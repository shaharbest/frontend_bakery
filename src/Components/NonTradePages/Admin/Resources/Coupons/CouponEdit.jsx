import React from 'react'
import { TextInput, Edit, SimpleForm } from 'react-admin'
import CouponFields from './CouponFields'

function CouponEdit(props) {
  return (
    <Edit title={<CouponTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <CouponFields />
      </SimpleForm>
    </Edit>
  )
}

const CouponTitle = ({ record }) => {
  return <span>Coupon {record ? `${record.id}` : ''}</span>
}

export default CouponEdit
