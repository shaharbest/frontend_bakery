import React from 'react'
import {
  EditButton,
  List,
  Datagrid,
  TextInput,
  SimpleList,
  TextField,
  NumberField,
} from 'react-admin'
// import { useMediaQuery } from '@material-ui/core'

const filters = [<TextInput source="q" label="Search" alwaysOn />]

function CityList(props) {
  // const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isSmall = false

  return (
    <List filters={filters} {...props}>
      {isSmall ? <SimpleList /> : <BigList />}
    </List>
  )
}

function BigList() {
  return (
    <>
      <Datagrid rowClick="edit">
        <TextField source="_id" />
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="deliveryPrice" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default CityList
