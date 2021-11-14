import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Lazy } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './carousel.css'
import breakpoints from './breakpoints'

SwiperCore.use([Navigation, Pagination, Lazy])

function Carousel({ children }) {
  return (
    <Swiper
      lazy={true}
      pagination={true}
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={breakpoints}
    >
      {children.map((curChild, index) => (
        <SwiperSlide key={index}>{curChild}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
