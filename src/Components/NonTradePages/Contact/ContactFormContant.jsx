import React from 'react'
import ShaharTextField from '../../Utils/ShaharTextField'

function ContactFormContant() {
  return (
    <div className="flex flex-col gap-1 border border-dashed py-5 px-2">
      <div className="grid grid-cols-3 gap-1">
        <label className="text-center">full name</label>
        <ShaharTextField
          className="col-span-2"
          fieldAdditionaClass="w-full p-1 text-center"
          name="fullName"
          type="text"
        />
        <label className="text-center">email</label>
        <ShaharTextField
          className="col-span-2"
          fieldAdditionaClass="w-full p-1 text-center"
          name="email"
          type="text"
        />
        <label className="text-center">message</label>
        <ShaharTextField
          name="message"
          className="col-span-2 h-"
          as="textarea"
          maxLength="500"
          fieldAdditionaClass="w-full p-1 h-56"
        />
      </div>
    </div>
  )
}

function ContactField({ label, name }) {
  return (
    <>
      <label>{label}</label>
      <ShaharTextField fieldAdditionaClass="w-28" name={name} type="text" />
    </>
  )
}

export default ContactFormContant
