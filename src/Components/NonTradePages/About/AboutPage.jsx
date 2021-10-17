import React from 'react'
import AboutParagraph from './AboutParagraph'
import AboutPicVidDiv from './AboutPicVidDiv'
import AboutMap from './AboutMap'

function AboutPage() {
  return (
    <div className="mx-0 md:mx-10 overflow-x-hidden">
      <h1 className="py-5">About</h1>
      <AboutParagraph />
      <div>
        <AboutPicVidDiv />
        <AboutMap />
      </div>
    </div>
  )
}

export default AboutPage
