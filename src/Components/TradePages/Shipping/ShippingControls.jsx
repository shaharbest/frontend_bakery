import React from 'react'
import FormikControl from '../../Utils/Formik/FormikControl'

function ShippingControls() {
  return (
    <>
      <FormikControl
        control="input"
        type="text"
        label="street name"
        name="streetName"
      />
      <FormikControl
        control="input"
        type="number"
        label="street number"
        name="streetNumber"
      />
      <FormikControl
        control="input"
        type="number"
        label="apartment number"
        name="apartmentNumber"
      />
      <FormikControl control="input" type="text" label="city" name="city" />
      <FormikControl
        control="input"
        type="text"
        label="postal code"
        name="postalCode"
      />
    </>
  )
}

export default ShippingControls
