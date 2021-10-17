import React from 'react'
import MyAvatar from '../../Utils/MyAvatar'
import {
  EditButton,
  List,
  Datagrid,
  TextField,
  NumberField,
  TextInput,
  ReferenceField,
  SimpleList,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  BooleanField,
} from 'react-admin'
// import { useMediaQuery } from '@material-ui/core'

const productFilters = [<TextInput source="q" label="Search" alwaysOn />]

function ProductList(props) {
  // const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isSmall = false

  return (
    <List filters={productFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={
            <ReferenceField reference="categories" source="categoryId">
              <TextField source="name" />
            </ReferenceField>
          }
          rightAvatar={(record) => record.mainImage}
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
        <TextField source="name" />
        <TextField source="description" />
        <NumberField source="price" />
        <ArrayField source="categories">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <NumberField source="rated" />
        <BooleanField source="isInStock" />
        <MyAvatar source="mainImagePath" />
        <ArrayField source="otherImages">
          <SingleFieldList>
            <MyAvatar source="path" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </>
  )
}

export default ProductList
