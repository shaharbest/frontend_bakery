import React from 'react'
import { Resource } from 'react-admin'
import UserList from './UserList'
import UserEdit from './UserEdit'
import UserCreate from './UserCreate'
import UserIcon from '@material-ui/icons/Group'

function UserResource(props) {
  return (
    <>
      <Resource
        icon={UserIcon}
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        {...props}
      />
    </>
  )
}

export default UserResource
