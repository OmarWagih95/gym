'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import{Link as ScrollLink } from 'react-scroll';
import { IoMenuSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { useRouter } from  'next/navigation';



import { useState } from 'react'
// const links =[
//   {name:'Categories',target:'ourCategories',offset:-60},
//   {name:'Finished projects',target:'latestProjects',offset:-60},
//   {name:'About',target:'about',offset:-60},
//   {name:'Feedbacks',target:'feedback',offset:-60},
//   {name:'Contact us',target:'contactUS',offset:-60},

// ]

function MobileNav() {
  const links =[
    {name:'Home',target:'heroSec',offset:-100 ,onclick:()=>
      router.push('/#heroSec')
   
    
  },
    {name:'About',target:'about',offset:-80 ,
    onclick:()=>
      router.push('/#about')
  },
    // {name:'Finished projects',target:'/#latestProjects',offset:-60},
    {name:'Classes',target:'classes',offset:0,
    onclick:()=>
      router.push('/#classes')
  },
    {name:'Team',target:'team',offset:0,
    onclick:()=>
      router.push('/#team')
  },
    {name:'prices',target:'membership',offset:0,
    onclick:()=>
      router.push('/#membership')
  },
    {name:'Testimonials',target:'testimonials',offset:-30,
    onclick:()=>
      router.push('/#testimonials')
  },
    {name:'blogs',target:'blogs',offset:0,
    onclick:()=>
      router.push('/#blogs')
  },
    {name:'contact',target:'contact',offset:0,
    onclick:()=>
      router.push('/#contact')
  },
    
  //   // {name:'Feedbacks',target:'/#feedback',offset:-60},
  //   {name:'Contact us',target:'contactUS',offset:-60,
  //   onclick:()=>
  //     router.push('/#contactUS')

    
  // },
  ];
  const path= usePathname();
  console.log(path.length);
  const router= useRouter();


    const [toggleDropDown, settoggleDropDown] = useState(false);
  return (
    <div className=' lg:hidden w-full flex items-center justify-end'>
            <div className="  flex h-8 items-center justify-end text-end">
     
      <IoMenuSharp onClick={()=>settoggleDropDown((prev)=>!prev)}
            width={50}
            height={50}
            scale={0.5}
            size={25}
            className='text-gray-600 mr-5' />

            {/* <Image  src={'/craftopus1.png'}
            onClick={()=>settoggleDropDown((prev)=>!prev)}
            width={37}
            height={37}
            className="rounded-full"></Image> */}
      {/* <div className='flex items-center gap-2 pl-4 py-2'> */}

      {/* <a className="block text-teal-600" href="#">
        <span className="sr-only">Home</span>
       <Image src={'/craftopus1.png'} width={50} height={30}></Image>
      </a> */}
      {/* <Link href='/' className='  font-bold'>
        <h6 className=' text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text'>
        Craftopus
        </h6>
        </Link> */}
      {/* </div> */}
      {/* <div></div> */}
  
           {toggleDropDown && (<div className="dropdown justify-center items-center bg-black">
           {links.map((link,index)=>{
              return(        <li key={index} className=" list-none p-3 text-gray-500 transition hover:text-gray-200">
                <ScrollLink 
                
                onClick={()=>{

                  settoggleDropDown((prev)=>!prev)
                  if (path.length>1){           
                    console.log('here')
                    router.push(`/#${link.target}`)
                  }
                }
                }
                //  onClick={
                //   path.length>1?
                //   //TODO: after release m7tag check  
                //  link.onclick:null
              
                // }
                // onClick={()=>{
                //   path.length>1?
                // //   //TODO: after release m7tag check  
                //  link.onclick:null;
                //  settoggleDropDown((prev)=>!prev)
                // }}
                // onClick={()=>settoggleDropDown((prev)=>!prev)}
                className='pb-2 border-b-2 border-gray-900'
                offset={link.offset}
                to={link.target}
                smooth 
                spy
                key={index}
                duration={1500}
      delay={500}
                activeClass='inActive'
                >

                  {link.name}
                  </ScrollLink>
                  {/* <Link offset={link.offset} href={`#${link.target}`} className="dropdown_link" 
            onClick={()=>settoggleDropDown(false)}>{link.name}</Link> */}
  
                
  {/* <Link  className='pb-2 border-b-2 border-gray-900'
                offset={link.offset}
                reloadCurrent={true}
                // replace={true}
                onClick={()=>{settoggleDropDown(false);}}
                href={link.target}
                smooth 
                scroll={true}
                spy
                key={index}
                activeClass='active'>
                  {link.name}
                  
                  </Link> */}

                {/* <a className="text-gray-500 transition hover:text-gray-500/75" href="#ourProducts"> Products </a> */}
              </li>);
          }
        )}
            {/* <Link href={'/profile'} className="dropdown_link" 
            onClick={()=>settoggleDropDown(false)}>my profile</Link>
            <Link href={'/create-prompt'} className="dropdown_link" 
            onClick={()=>settoggleDropDown(false)}>create prompt</Link>
            <button className="black_btn w-full mt-5" 
            onClick={()=>{settoggleDropDown(false);
            signOut}
            }>Sign Out</button> */}
           </div>)}
    </div>
    </div>
  )
}

export default MobileNav