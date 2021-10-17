import React from 'react'
import { TextInput, Edit, SimpleForm } from 'react-admin'
import CouponTypeFields from './CouponTypeFields'

function CouponTypeEdit(props) {
  return (
    <Edit title={<CouponTypeTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <CouponTypeFields />
      </SimpleForm>
    </Edit>
  )
}

const CouponTypeTitle = ({ record }) => {
  return <span>CouponType {record ? `${record.id}` : ''}</span>
}

export default CouponTypeEdit
