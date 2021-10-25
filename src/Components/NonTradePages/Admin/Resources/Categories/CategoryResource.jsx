import React from 'react'
import { Resource } from 'react-admin'
import CategoryList from './CategoryList'
import CategoryEdit from './CategoryEdit'
import CategoryCreate from './CategoryCreate'
import CategoryIcon from '@material-ui/icons/Category'

function CategoryResource(props) {
  return (
    <Resource
      icon={CategoryIcon}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      {...props}
    />
  )
}

export default CategoryResource
