'use client'
import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

const SwiperNavKeys = ({leftButtonStyle,rightButtonStyle,containerStyle}:{
    leftButtonStyle:string,
    rightButtonStyle:string,
    containerStyle:string,
}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyle}>

    <button 
                onClick={()=>swiper.slidePrev()}
                className={leftButtonStyle}>
                    <PiCaretLeftBold className='text-white'/>
                </button> 
    <button 
                onClick={()=>swiper.slideNext()}
                className={rightButtonStyle}>
                    <PiCaretRightBold className='text-white'/>
                </button> 
    </div>
  )
}

export default SwiperNavKeys