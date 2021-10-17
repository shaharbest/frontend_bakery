import React from 'react'
import CategoryFields from './CategoryFields'
import { SimpleForm, Create } from 'react-admin'

function CategoryCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <CategoryFields />
      </SimpleForm>
    </Create>
  )
}

export default CategoryCreate
