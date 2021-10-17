import React from 'react'
import { Resource } from 'react-admin'
import ProductList from './ProductList'
import ProductEdit from './ProductEdit'
import ProductCreate from './ProductCreate'
import ProductIcon from '@material-ui/icons/Money'

function ProductResource(props) {
  return (
    <Resource
      icon={ProductIcon}
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
      {...props}
    />
  )
}

export default ProductResource
