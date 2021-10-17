import React from 'react'
import { TextInput, Edit, SimpleForm } from 'react-admin'
import CategoryFields from './CategoryFields'

function CategoryEdit(props) {
  return (
    <Edit title={<CategoryTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <CategoryFields />
      </SimpleForm>
    </Edit>
  )
}

const CategoryTitle = ({ record }) => {
  return <span>Category {record ? `${record.name}` : ''}</span>
}

export default CategoryEdit
