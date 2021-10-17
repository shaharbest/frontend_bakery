import React from 'react'
import {
  TextInput,
  DateInput,
  ImageField,
  SimpleFormIterator,
  ReferenceInput,
  SelectInput,
  ArrayInput,
} from 'react-admin'

function BlogPostFields() {
  return (
    <>
      <TextInput source="title" />
      <TextInput multiline source="content" />
      <TextInput source="imagePath" />
      <ImageField source="imagePath" title="title" />
      <DateInput source="datePosted" />
      <ArrayInput source="comments">
        <SimpleFormIterator>
          <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="firstName" />
          </ReferenceInput>
          <TextInput source="content" />
          <DateInput source="datePosted" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </>
  )
}

export default BlogPostFields
