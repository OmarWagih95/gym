'use client'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { FaQuoteLeft } from 'react-icons/fa6'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { PiCaretLeftBold } from 'react-icons/pi'
import { PiCaretRightBold } from 'react-icons/pi'
import Image from 'next/image';
import SwiperNavKey from './SwiperNavKey'
import SwiperNavKeys from './SwiperNavKey'
import Link from 'next/link'
import blogs from '../constants'


const Blogs = () => {
  return (
    <section id='blogs' className='bg-black h-auto py-8'>
                    <motion.h2 
         variants={fadeIn({direction:'up',delay:0.4})}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.2}}
        className='h4 mt-6 text-center text-white'>Blogs</motion.h2>
        <motion.div 
         variants={fadeIn({direction:'up',delay:0.8})}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.2}}
        className='relative flex justify-center items-center px-[40px] lg:px-[200px]'>
            <Swiper className='relative flex justify-center items-center'
            slidesPerView={1}
            spaceBetween={30}
            // modules={[Pagination]}
            // pagination={{clickable:true}}
            breakpoints={
                {768:{slidesPerView:2,spaceBetween:20   },
                1024:{slidesPerView:3,spaceBetween:25},
                1428:{slidesPerView:4,spaceBetween:25},
                }
            }
            >
                {blogs.map((blog, index) => 
                { 
                    return <SwiperSlide className='h-full pb-7 flex justify-center' key={index}>
                      <Link href={{pathname:`/blogs`,
                    query:{
                    title:blog?.title,
                    date:blog?.date,
                    img:blog?.img,
                    secondTitle:blog?.secondTitle
                    ,content:blog?.content,
                    coverImg:blog?.img2,
                    
                    }}}>
                      
                        <div className='py-3  flex flex-col justify-center items-center '>
                            <div className='w-[200px] h-[250px] relative'>

                        <Image className='' src={blog.img} fill alt={blog.title}></Image>
                            </div>

                        <div className='flex flex-col items-start justify-center w-[250px] pl-3'>

                        <p className=' text-gray-500 text-sm mt-2 max-w-[250px]'>{blog.date}</p>
                        <h4 className='hover:text-accent transition duration-300 text-white mt-2'>{blog.title}</h4>
                        </div>
                        </div>
                      </Link>

                    </SwiperSlide>
                })}
                {/* <button 
                onClick={()=>swiper?.slidePrev()}
                className='absolute flex justify-center items-center bg-accent top-24 -left-0 z-10 h-[35px] w-[45px]'>
                    <PiCaretLeftBold className='text-white'/>
                </button>  */}
               <SwiperNavKeys containerStyle='flex justify-between'
               leftButtonStyle='absolute flex justify-center items-center bg-accent top-24 -left-0 z-10 h-[35px] w-[45px]'
               rightButtonStyle='absolute flex justify-center items-center bg-accent top-24 right-0 z-10 h-[35px] w-[45px]'/>
                {/* <button 
                onClick={()=>swiper?.slideNext()}
                className='absolute flex justify-center items-center bg-accent top-24 right-0 z-10 h-[35px] w-[45px]'>
                    <PiCaretRightBold className='text-white'/>
                </button>  */}
            </Swiper>
        </motion.div>
    </section>
  )
}

export default Blogs