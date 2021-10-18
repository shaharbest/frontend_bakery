import React from 'react'
import { TextInput, BooleanInput, DateInput } from 'react-admin'

function CouponFields() {
  return (
    <>
      {/* problem! */}
      {/* <ReferenceInput
        label="type"
        source="couponTypeId"
        reference="couponTypes"
      >
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      <TextInput source="code" />
      <BooleanInput source="wasUsed" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </>
  )
}

export default CouponFields
