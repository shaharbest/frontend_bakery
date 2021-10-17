import React from 'react'
import ShaharTextField from '../../Utils/ShaharTextField'

function ContactFormContant() {
  return (
    <div className="flex flex-col gap-1 border border-dashed py-5 px-2">
      <div className="flex flex-col">
        <ContactField name="fullName" label="full name" />
        <ContactField name="email" label="email" />
      </div>
      <label>your message</label>
      <ShaharTextField
        name="message"
        className="w-full mx-auto p-1"
        as="textarea"
        maxLength="500"
      />
    </div>
  )
}

function ContactField({ label, name }) {
  return (
    <div className="">
      <label className="">{label}</label>
      <ShaharTextField name={name} type="text" />
    </div>
  )
}

export default ContactFormContant
