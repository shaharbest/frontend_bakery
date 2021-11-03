import React from 'react'
import MyAvatar from '../../Utils/MyAvatar'
import {
  TextField,
  TextInput,
  SimpleList,
  EmailField,
  DateField,
  Datagrid,
  NumberField,
  List,
  EditButton,
  BooleanField,
} from 'react-admin'

import { useMediaQuery } from '@material-ui/core'

const userFilters = [<TextInput source="q" label="Search" alwaysOn />]

function UserList(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <List filters={userFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => `${record.firstName} ${record.lastName}`}
          rightAvatar={(record) => record.avatarImagePath}
        />
      ) : (
        <BigList />
      )}
    </List>
  )
}

function BigList() {
  return (
    <>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField label="first name" source="firstName" />
        <TextField label="last name" source="lastName" />
        <TextField source="phone" />
        <EmailField source="email" />
        <BooleanField label="admin" source="isAdmin" />
        <TextField label="street" source="streetName" />
        <NumberField label="street #" source="streetNumber" />
        <TextField label="city" source="cityId.name" />
        <MyAvatar label="" source="avatarImagePath" />
        <DateField label="signed" source="dateSignedUp" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default UserList
