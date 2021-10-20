import React from 'react'
import {
  TextInput,
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from 'react-admin'

function UserFields() {
  return (
    <>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
      <TextInput source="streetName" />
      <NumberInput source="streetNumber" />

      <ReferenceInput label="city" source="cityId" reference="cities">
        <SelectInput optionText="name" optionValue="_id" />
      </ReferenceInput>

      <TextInput source="avatarImagePath" />
      <DateInput source="dateSignedUp" />
    </>
  )
}

export default UserFields
