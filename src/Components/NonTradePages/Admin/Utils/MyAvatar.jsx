import React from 'react'
import { Avatar } from '@material-ui/core'
import { useRecordContext } from 'react-admin'

function MyAvatar({ source }) {
  const record = useRecordContext()
  return <Avatar alt="Remy Sharp" src={record[source]} />
}

export default MyAvatar
