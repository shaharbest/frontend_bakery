import React from 'react'
import ProductFields from './ProductFields'
import { SimpleForm, Create } from 'react-admin'

function ProductCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <ProductFields />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate
