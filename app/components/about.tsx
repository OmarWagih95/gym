'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import CountUp from 'react-countup';
import { FaDumbbell } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";




const featured=[
  {icon:<MdGroups />
    ,
    title:'Awared winning trainers',
    desc:'we have the best coaches heree what are you talking abouttt'
  },
  {icon:<IoIosPricetags />,
    title:'Excellent prices',
    desc:'we have the best coaches heree what are you talking abouttt'
  },
  {icon:<FaDumbbell />,
    title:'MODERN Equipment',
    desc:'we have the best coaches heree what are you talking abouttt'
  },
];

const acheivments = [
  {title:'training courses',
    icon:<FaBookBookmark />,
    number:92
    },
    {title:'working hours',
      icon:<FaClock />,
      number:24
      },
      {title:'happy customers',
        icon:<IoHappy />,
        number:7019
        },
      {title:'international award',
        icon:<FaTrophy />,
        number:204
      },
        ]

const About = () => {
  const ref =useRef(null);
  const isInView =useInView(ref);
  return (
<section id='about' className=' bg-white max-auto lg:h-screen  ' >
   <div className='py-7 px-3 lg:px-24 pb-24 flex-col text-center items-center justify-center'>

    <h1 className=' text-[3vh] lg:text-[2vw]'>About US</h1>
    <p className= 'font-oswald mt-4 px-7 lg:px-52'> our gym was opened in 2003 one of the biggest gyms in town many superheroes trained here
      we hope you become one of them.
    </p>
    <div className='flex flex-col px-14 lg:px-0 lg:flex-row gap-4 items-center justify-center mt-2'>
      {/* //card */}
      {
        featured.map((item,index)=>(
          
     <div key={index} className='flex flex-col items-center justify-center text-center px-9 py-4 border-[1px] border-opacity-50 border-gray-400'>
        <div className='p-3 w-10 text-white bg-black rounded-full'>
        {item.icon}</div>
        <h1 className='mt-3 text-accent'>{item.title}</h1>
        <p className='text-sm mt-3'>{item.desc}</p>
      </div>
        )
      )
      }
    </div>
    <div ref={ref} className='grid grid-cols-2  mb-5 px-4 lg:px-0 lg:grid-cols-4 gap-4'>
    {
        acheivments.map((item,index)=>(
          
     <div key={index} className='flex flex-col items-center justify-center text-center px-9 py-6'>
       <div className='relative mb-4 p-[2px] h-24 w-24 border-[2px] border-accent border-opacity-30 rounded-full'>

        <div className='flex font-semibold text-[20px] items-center justify-center text-center 
            w-full h-full border-[1px] border-gray-500 border-opacity-30 rounded-full'>
       {
        isInView &&
        <CountUp start={0} end={item.number} duration={6}></CountUp>
       }
        
        </div>
       </div>
       <div className='text-[20px]'>
       {item.icon}
       </div>
        <h1 className=''>{item.title}</h1>
        
      </div>
        )
      )
      }

    </div>
   </div>
</section>  )
}

export default About