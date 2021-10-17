import React from 'react'
import {
  EditButton,
  List,
  Datagrid,
  TextInput,
  SimpleList,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin'
// import { useMediaQuery } from '@material-ui/core'

const couponFilters = [<TextInput source="q" label="Search" alwaysOn />]

function CouponList(props) {
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
        <TextField label="discount" source="couponTypeId.discount" />
        <TextField source="code" />
        <BooleanField source="wasUsed" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default CouponList
