import React from 'react'
import ContactDetails from './ContactDetails'

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="flex items-center">
        <div className="hidden md:flex content-center w-1/3 pr-2">
          <ProfileImage />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between gap-2">
          <ContactDetails />
          <div className="md:hidden">
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileImage() {
  return <img alt="developer" className="w-full" src="/images/developer.jpg" />
}

export default ContactPage
