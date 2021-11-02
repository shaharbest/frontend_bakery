import React from 'react'
import ContactDetails from './ContactDetails'
import ProfileSection from './ProfileSection'

function ContactPage() {
  return (
    <div>
      <div className="flex">
        <div className="hidden md:flex content-center w-1/3">
          <ProfileSection />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div className="h-full flex flex-col justify-center">
            <h1>Contact Us</h1>
          </div>
          <ContactDetails />
          <div className="md:hidden">
            <ProfileSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
