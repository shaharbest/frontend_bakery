import React from 'react'
import { Resource } from 'react-admin'
import CityList from './CityList'
import CityEdit from './CityEdit'
import CityCreate from './CityCreate'
import CityIcon from '@material-ui/icons/Money'

function CityResource(props) {
  return (
    <Resource
      icon={CityIcon}
      list={CityList}
      edit={CityEdit}
      create={CityCreate}
      {...props}
    />
  )
}

export default CityResource
