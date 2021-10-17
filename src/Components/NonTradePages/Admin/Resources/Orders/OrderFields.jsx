import React from 'react'
import {
  NumberInput,
  TextInput,
  BooleanInput,
  DateInput,
  ArrayInput,
  ReferenceInput,
  SelectInput,
  SimpleFormIterator,
} from 'react-admin'

function OrderFields() {
  return (
    <>
      {/* userid */}
      <BooleanInput source="isForDelivery" />
      <TextInput source="address" />
      <NumberInput source="discount" />
      <NumberInput source="vatRate" />
      <NumberInput source="totalPrice" />
      <ArrayInput source="items">
        <SimpleFormIterator>
          <ReferenceInput
            label="product"
            source="productId"
            reference="products"
          >
            <SelectInput optionText="name" />
          </ReferenceInput>
          <NumberInput label="quantity" source="quantity" />
          <NumberInput label="unit price" source="productUnitPrice" />
          <TextInput label="product name" source="productName" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </>
  )
}

export default OrderFields
