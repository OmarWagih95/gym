'use client'

import React from 'react'
import CustomeButton from './CustomeButton'
import{motion} from'framer-motion';
import { fadeIn } from '../variants';


const Hero = () => {
  return (
    <section id='heroSec' className='overflow-x-hidden flex bg-hero bg-no-repeat bg-cover bg-center h-[80vh] lg:h-screen'>
      <div className='hidden lg:flex w-1/2' ></div>
      <div className='flex pt-20 lg:pt-40 flex-col lg:w-1/2 text-center lg:text-start items-center lg:items-start justify-center lg:justify-start pr-4'>
     <motion.h1 className='h1'
        variants={fadeIn({direction:'down',delay:1.5})}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.2}}>
     <span className='text-accent'
    
       >
          WHERE HARD 
        </span>
     </motion.h1>
      <motion.h1 className='h1'
      variants={fadeIn({direction:'down',delay:0.9})}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.2}}>
  
       WORK MEETS SUCCESS
      </motion.h1>
      <motion.p
        variants={fadeIn({direction:'down',delay:0.5})}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.2}}
      className='text-white font-roboto pt-2 italic max-w-[420px]'>Push Your Limits, Master Your Fitness, Master Your Life .</motion.p>
      {/* <CustomeButton text='Get Started'/> */}
      <div className='flex gap-2 mt-3'>

      < motion.button 
        variants={fadeIn({direction:'right',delay:1.4})}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.5}}
      className='rounded-sm w-[170px] h-[52px] bg-black border-2 border-accent hover:bg-accent  cursor-pointer uppercase transition duration-500 text-white'>
        Learn More
      </motion.button>
      
      < motion.button 
        variants={fadeIn({direction:'left',delay:1.5})}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.6}}
      className='rounded-sm w-[170px] h-[52px] bg-accent cursor-pointer uppercase transition duration-500 hover:bg-black text-white'>
        get started
      </motion.button>
      </div>
      </div>
    </section>
  )
}

export default Hero