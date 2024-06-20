'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import ClassDetails from './ClassDetails'
import './../variants';
import { motion } from 'framer-motion'
import { fadeIn } from './../variants'

const classes=[
  {title:'bodybuilding',
    img:'/assets/img/classes/bodybuilding.jpg'
    ,desc:'Bodybuilding how albodybuilding'
    ,bigDesc:'we offer you in our gym a very good session of that topic and we offer you in our gym a very good session of that topic and we offer you in our gym a very good session of that topic and we offer you in our gym a very good session of that topic '
    
  },
  {title:'Cardio',
    img:'/assets/img/classes/cardio.jpg'
    ,desc:'Bodybuilding how albodybuilding'
  },
  {title:'crossfit',
    img:'/assets/img/classes/crossfit.jpg'
    ,desc:'Bodybuilding how albodybuilding'
  },
  {title:'boxing',
    img:'/assets/img/classes/boxing.jpg'
    ,desc:'Bodybuilding how albodybuilding'
  },
  {title:'kickboxing',
    img:'/assets/img/classes/kickboxing.jpg'
    ,desc:'Bodybuilding how albodybuilding'
  },
  {title:'MMA',
    img:'/assets/img/classes/mma.jpg'
    ,desc:'Bodybuilding how albodybuilding'
  },
]
const Classes = () => {
  const router = useRouter();
  return (
    <section id='classes' className='pt-7 h-auto lg:h-auto  bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2' >
        {classes.map((item,index)=>
        
        <div key={index} className='relative flex flex-col justify-center h-[200px] lg:h-[280px] items-center text-center '>
            <Image alt={item.title} fill src={item.img} className='object-cover'></Image>
            <div className='flex flex-col items-center h-[140px] justify-between text-center' >
                <motion.h3
                        variants={fadeIn({direction:'up',delay:0.5})}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.2}}
                className='h3 text-white z-10'>
                  {item.title}
                </motion.h3>
                <motion.p 
                        variants={fadeIn({direction:'up',delay:0.7})}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.2}}
                className='text-gray-300 text-sm max-w-[300px] z-10'>{item.desc}</motion.p>
               
               
               
                < motion.button 
                  onClick={() => {
                    router.push(`../class-details/${item.title}`);

                  }}
                        variants={fadeIn({direction:'up',delay:0.5})}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.1}}
                // onClick={()=>router.push('../ClassDetails')}

     
      className='rounded-sm w-[150px] z-10 h-[42px] bg-accent cursor-pointer uppercase transition duration-500 hover:bg-black text-white'>
        Read more
      </motion.button>
            </div>
        </div>
        )}

      </div>
    </section>
  )
}

export default Classes