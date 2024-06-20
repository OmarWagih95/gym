'use client'
import Image from 'next/image'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaQuoteLeft } from 'react-icons/fa6'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'


const testimonialsData=[
    {img:'/assets/img/testimonial/michael.jpg',
        name:'Michael Jordan',
        message:`i'm very glad that i've trained here`
    },
    {img:'/assets/img/testimonial/maria.jpg',
        name:'Maria Shrapova',
        message:`i'm very glad that i've trained here`
    },
    {img:'/assets/img/testimonial/lucy.jpg',
        name:'lucy maguire',
        message:`i'm very glad that i've trained here i'will come back with my friends`
    },
    {img:'/assets/img/testimonial/michael.jpg',
        name:'Michael Jordan',
        message:`i'm very glad that i've trained here`
    },
    {img:'/assets/img/testimonial/maria.jpg',
        name:'Maria Shrapova',
        message:`i'm very glad that i've trained here`
    },
    {img:'/assets/img/testimonial/lucy.jpg',
        name:'lucy maguire',
        message:`i'm very glad that i've trained here i'will come back with my friends`
    },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='h-auto py-6'>
        <motion.h2 
         variants={fadeIn({direction:'up',delay:0.4})}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.2}}
        className='h4 mt-4 text-center'>Our Testimonials</motion.h2>
        <motion.div 
         variants={fadeIn({direction:'up',delay:0.6})}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.2}}
        className='flex justify-center items-center lg:px-[100px]'>
            <Swiper className='flex justify-center items-center'
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable:true}}
            breakpoints={
                {768:{slidesPerView:2,spaceBetween:30},
                1024:{slidesPerView:3,spaceBetween:40}
                }
            }
            >
                {testimonialsData.map((person, index) => 
                { 1
                    return <SwiperSlide className='h-full pb-7 flex justify-center' key={index}>
                        <div className='py-3 flex flex-col justify-center items-center'>

                        <Image className='rounded-full border-2 border-accent' src={person.img} width={90} height={90} alt={person.name}></Image>
                        <FaQuoteLeft className= 'mt-3 text-gray-300'/>
                        <p className='text-gray-500 text-sm mt-2 max-w-[250px]'>{person.message}</p>
                        <h4 className=' text-accent mt-2'>{person.name}</h4>
                        </div>

                    </SwiperSlide>
                })}

            </Swiper>
        </motion.div>

    </section>
  )
}

export default Testimonials