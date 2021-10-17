import React from 'react'
import ShaharTextField from '../../Utils/ShaharTextField'

function FormEntry({ label, type, name }) {
  return (
    <div className="">
      <h2 className="text-left">{label}</h2>
      <ShaharTextField name={name} type={type} />
    </div>
  )
}

export default FormEntry
