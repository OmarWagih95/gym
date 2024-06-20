'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
const team=[
    {
    img:'/assets/img/trainers/david.jpg',
    name:'David',
    jobTitle:'Professional bodybuilder',
    desc:'sleap train eat repaeat'
    },
    {
    img:'/assets/img/trainers/matt.jpg',
    name:'matt scott',
    jobTitle:'Professional bodybuilder',
    desc:'sleap train eat repaeat'
},
    {
    img:'/assets/img/trainers/rosy.jpg',
    name:'rosy miller',
    jobTitle:'Professional bodybuilder',
    desc:'sleap train eat repaeat'
},
    {
    img:'/assets/img/trainers/sofia.jpg',
    name:'sofia giroud',
    jobTitle:'Professional bodybuilder',
    desc:'sleap train eat repaeat'
},
]

const Team = () => {
  return (
    <section id='team' className='overflow-x-hidden pt-10 lg:h-screen h-auto bg-white flex flex-col justify-start text-center items-center'>
        <h1 className='h4'>OUR TRAINERS</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 py-4 px-3 lg:px-20 gap-2 lg:gap-6'>
                {team.map((item,index)=>
                <motion.div
                variants={fadeIn({direction:'up',delay:0.1})}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.6}}
                 key={index}  className='cursor-pointer relative flex flex-col justify-start items-center :h-[240px] :w-[170px] lg:h-[310px] lg:w-[220px] transition duration-700 border-2 border-opacity-20 border-red-300 hover:border-accent'>
                    
                    <div className='relative w-full h-[140px] lg:h-[200px]'>

                    <Image fill src={item.img} alt={item.name}  ></Image>
                    </div>
                    <h1 className='h5 mt-1'>{item.name}</h1>
                    <h6 className='text-[8px] text-gray-600 text-opacity-65'>{item.jobTitle}</h6>
                    <p className= 'text-[9px] max-w-[190px]'>{item.desc}</p>
                </motion.div>)}
                 </div>
                < button 
      className='rounded-sm text-[13px] w-[150px]  h-[42px] bg-accent cursor-pointer uppercase transition duration-500 hover:bg-black text-white'>
        see all trainers
      </button>
    </section>
)
}

export default Team