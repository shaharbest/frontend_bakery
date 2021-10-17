import React from 'react'
import { NumberInput, TextInput, DateInput } from 'react-admin'

function ProductFields() {
  return (
    <>
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <NumberInput source="price" />
      {/* category */}
      <NumberInput source="rated" />
      <NumberInput source="isInStock" />
      <TextInput source="mainImagePath" title="title" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </>
  )
}

export default ProductFields
