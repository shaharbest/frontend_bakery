import React from 'react'
import { TextInput, Edit, SimpleForm } from 'react-admin'
import CityFields from './CityFields'

function CityEdit(props) {
  return (
    <Edit title={<CityTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <CityFields />
      </SimpleForm>
    </Edit>
  )
}

const CityTitle = ({ record }) => {
  return <span>City {record ? `${record.id}` : ''}</span>
}

export default CityEdit
