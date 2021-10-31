import React from 'react'

function ContactInfo() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <h3>Contact</h3>
        <h4 className="italic">
          <a href="mailto:bestshahar9@gmail.com.com">bestshahar4@gmail.com</a>
        </h4>
      </div>
      <div>
        <h3>Based in</h3>
        <address>
          <h4>Tirat Carmel</h4>
          <h4>Israel</h4>
        </address>
      </div>
    </div>
  )
}

export default ContactInfo
