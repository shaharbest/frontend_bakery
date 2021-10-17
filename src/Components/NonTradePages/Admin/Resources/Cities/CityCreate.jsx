import React from 'react'
import CityFields from './CityFields'
import { SimpleForm, Create } from 'react-admin'

function CityCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <CityFields />
      </SimpleForm>
    </Create>
  )
}

export default CityCreate
