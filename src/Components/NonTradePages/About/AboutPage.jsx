import React from 'react'
import AboutMap from './AboutMap'
import lorem from './lorem.json'

const youtubeWidth = 500
const youtubeHeight = 250

function AboutPage() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-10 my-11 mx-11">
      <section className="p-3">
        <h1 className="py-5">About Us</h1>
        <article>
          <img
            alt="baker"
            className="md:max-w-xl w-96 md:w-max mx-auto md:float-right p-3"
            src="images/baker.jpg"
          />
          <p>{lorem.p1}</p>
          <br />
          <p>{lorem.p2}</p>
        </article>
      </section>
      <iframe
        className="mx-auto"
        width={youtubeWidth}
        height={youtubeHeight}
        src="https://www.youtube.com/embed/DnbY2bfmqtc"
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <AboutMap />
    </div>
  )
}

export default AboutPage
