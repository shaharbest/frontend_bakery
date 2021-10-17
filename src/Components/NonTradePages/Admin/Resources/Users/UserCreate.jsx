import React from 'react'
import UserFields from './UserFields'
import { SimpleForm, Create } from 'react-admin'

function UserCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <UserFields />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
