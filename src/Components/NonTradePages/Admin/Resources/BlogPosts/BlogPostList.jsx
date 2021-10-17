import React from 'react'
import MyAvatar from '../../Utils/MyAvatar'
import {
  EditButton,
  List,
  Datagrid,
  TextField,
  TextInput,
  SimpleList,
  ReferenceInput,
  SelectInput,
  DateField,
  ArrayField,
  FunctionField,
  ReferenceField,
} from 'react-admin'
// import { useMediaQuery } from '@material-ui/core'

const blogPostFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
]

function BlogPostList(props) {
  // const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isSmall = false

  return (
    <List filters={blogPostFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.title}
          rightAvatar={(record) => record.image}
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
        <TextField source="title" />
        <MyAvatar source="imagePath" />
        <DateField source="datePosted" />
        <ArrayField source="comments">
          <Datagrid>
            <ReferenceField label="User" source="userId" reference="users">
              <FunctionField
                label="name"
                render={(record) => `${record.firstName} ${record.lastName}`}
              />
            </ReferenceField>
            <ReferenceField label="" source="userId" reference="users">
              <MyAvatar source="avatarImagePath" />
            </ReferenceField>
            <TextField source="content" />
          </Datagrid>
        </ArrayField>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default BlogPostList
