import React from 'react'
import { TextInput, Edit, SimpleForm, ImageField } from 'react-admin'
import UserFields from './UserFields'

function UserEdit(props) {
  return (
    <Edit title={<UserTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <UserFields />
        <ImageField source="avatarImagePath" title="title" />
      </SimpleForm>
    </Edit>
  )
}

const UserTitle = ({ record }) => {
  return (
    <span>User {record ? `"${record.firstName} ${record.lastName}"` : ''}</span>
  )
}

export default UserEdit
