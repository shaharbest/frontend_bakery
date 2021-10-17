import React from 'react'

const widthHeightRatio = 560 / 315,
  youtubeHeight = 326,
  youtubeWidth = youtubeHeight * widthHeightRatio

function AboutPicVidDiv() {
  return (
    <div className="lg:flex lg:justify-evenly">
      <img
        alt="baker"
        className="max-w-xl mx-auto my-3 lg:m-3 max-h-96"
        src="images/baker.jpg"
      />
      <iframe
        className="mx-auto max-w-2xl my-3 lg:mx-3"
        width={youtubeWidth}
        height={youtubeHeight}
        src="https://www.youtube.com/embed/DnbY2bfmqtc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default AboutPicVidDiv
