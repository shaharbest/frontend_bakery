import React from 'react'
import MyAvatar from '../../Utils/MyAvatar'
import {
  EditButton,
  List,
  Datagrid,
  TextInput,
  SimpleList,
  TextField,
  DateField,
  BooleanField,
  NumberField,
  ArrayField,
  SingleFieldList,
  ChipField,
  // ImageField,
  ReferenceField,
} from 'react-admin'
// import { useMediaQuery } from '@material-ui/core'

const couponFilters = [<TextInput source="q" label="Search" alwaysOn />]

function OrderList(props) {
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
        <ReferenceField label="client id" source="userId.id" reference="users">
          <NumberField source="id" />
        </ReferenceField>
        <ReferenceField label="" source="userId.id" reference="users">
          <MyAvatar source="avatarImagePath" />
        </ReferenceField>

        {/* <TextField source="userId.firstName" /> */}
        <BooleanField source="isForDelivery" />
        <TextField source="address" />
        <NumberField source="discount" />
        <NumberField label="total" source="totalPrice" />
        <ArrayField source="items">
          <SingleFieldList>
            <ChipField source="productId" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default OrderList
