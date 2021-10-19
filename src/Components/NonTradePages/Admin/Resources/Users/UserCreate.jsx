import React from 'react'
import UserFields from './UserFields'
import { SimpleForm, Create } from 'react-admin'

function UserCreate({ permissions, ...props }) {
  return (
    <Create {...props}>
      <SimpleForm>{permissions === 'admin' && <UserFields />}</SimpleForm>
    </Create>
  )
}

export default UserCreate
