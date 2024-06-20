'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { fadeIn } from '../variants';


const membership=[
  {package:'standard',
  membership:{text:'includes membership',inc:true},
  gymFacilities:{text:'Access to gym facilities',inc:false},
  dietPlan:{text:'Diet plan included',inc:false},
  tips:{text:'Health and fitness tips',inc:true},
  monfri:{text:'Monday friday gym access',inc:false},
  fullAccess:{text:'full access to everything',inc:false},
  sauna:{text:'2 sauna sessions',inc:true},
  price:30,
},
  {package:'Ultimate',
  membership:{text:'includes membership',inc:true},
  gymFacilities:{text:'Access to gym facilities',inc:true},
  dietPlan:{text:'Diet plan included',inc:true},
  tips:{text:'Health and fitness tips',inc:true},
  monfri:{text:'Monday friday gym access',inc:true},
  fullAccess:{text:'full access to everything',inc:false},
  sauna:{text:'6 sauna sessions',inc:true},
  price:50,
},
  {package:'professional',
  membership:{text:'includes membership',inc:true},
  gymFacilities:{text:'Access to gym facilities',inc:true},
  dietPlan:{text:'Diet plan included',inc:true},
  tips:{text:'Health and fitness tips',inc:true},
  monfri:{text:'Monday friday gym access',inc:true},
  fullAccess:{text:'full access to everything',inc:true},
  sauna:{text:'10 sauna sessions',inc:true},
  price:60,
},

]
const Membership = () => {
  return (
    <section id='membership' className='mt-6 relative h-auto lg:h-screen flex flex-col justify-start items-center text-center'>
        <Image fill   alt='membership' className='object-cover'  src={'/assets/img/membership/bg.jpg'}></Image>
        {/* hna 7ot devaya kbera column 3shan al index mra wa7da */}
        <div className='z-10'>

        <h4 className='h4 mr-1 mt-4 lg:mt-11  text-white tracking-[-3]'>MEMBERSHIP</h4>
        < div className='flex flex-col lg:flex-row gap-4 pb-4'
          >
          {membership.map((item,index)=>
          <motion.div
          variants={fadeIn({direction:'down',delay:0.5})}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.2}}
          key={item.package} className='h-[400px] cursor-pointer w-[280px] border-2 py-2  border-accent flex flex-col justify-start items-start'>
           <div className='border-b-2 flex justify-start w-full border-accent'>

            <h1 className='h5 uppercase ml-4 py-1 text-white'>{item.package}</h1>
           </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.membership.inc?<FaCheck />:<IoClose className='size-[20px]'/>}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black  font-semibold'>{item.membership.text}</p>
            </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.gymFacilities.inc?<FaCheck />:<IoClose className='size-[20px]'/>}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black font-semibold'>{item.gymFacilities.text}</p>
            </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.dietPlan.inc?<FaCheck />:<IoClose className='size-[20px]'/>}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black font-semibold'>{item.dietPlan.text}</p>
            </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.tips.inc?<FaCheck />:<IoClose className='size-[20px]'/>}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black font-semibold'>{item.tips.text}</p>
            </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.monfri.inc?<FaCheck />:<IoClose className='size-[20px]' />}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black font-semibold'>{item.monfri.text}</p>
            </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.fullAccess.inc?<FaCheck />:<IoClose className='size-[20px]' />}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black	 font-semibold'>{item.fullAccess.text}</p>
            </div>
           <div className='pl-4 py-2 flex items-center gap-2 text-accent'>
           {item.sauna.inc?<FaCheck />:<IoClose className='size-[20px]' />}
           <p className='text-white text-shadow text-shadow-x-md text-shadow-y-sm text-shadow-blur-1 text-shadow-black font-semibold'>{item.sauna.text}</p>
            </div>
            <div className='relative flex gap-2 pl-4 py-2'>
              <p className='text-accent font-semibold'>$</p>
              <h1 className='h4 text-accent'>{item.price}</h1>
              <p className='text-accent mt-5 font-semibold'>/month</p>
            </div>

          </motion.div>
          )}
        </div>
        </div>
    </section>
  )
}

export default Membership