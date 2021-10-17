import React from 'react'
import { TextInput, Edit, SimpleForm, ImageField } from 'react-admin'
import ProductFields from './ProductFields'

function ProductEdit(props) {
  return (
    <Edit title={<ProductTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ProductFields />
        <ImageField source="mainImage" title="title" />
      </SimpleForm>
    </Edit>
  )
}

const ProductTitle = ({ record }) => {
  return <span>Product {record ? `${record.name}` : ''}</span>
}

export default ProductEdit
