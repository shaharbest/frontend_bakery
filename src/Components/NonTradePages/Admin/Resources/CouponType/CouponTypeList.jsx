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

function CouponTypeList(props) {
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
        <TextField source="id" />
        <NumberField source="discount" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default CouponTypeList
