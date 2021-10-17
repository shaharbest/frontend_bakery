import React from 'react'
import {
  EditButton,
  List,
  Datagrid,
  TextInput,
  SimpleList,
  TextField,
} from 'react-admin'
// import { useMediaQuery } from '@material-ui/core'

const couponFilters = [<TextInput source="q" label="Search" alwaysOn />]

function CategoryList(props) {
  // const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isSmall = false

  return (
    <List filters={couponFilters} {...props}>
      {isSmall ? <SimpleList /> : <BigList />}
    </List>
  )
}

function BigList() {
  return (
    <>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default CategoryList
