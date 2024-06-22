'use client'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const Page = () => {
    const searchParams=useSearchParams();
    console.log(searchParams.get('title'));
    const blogTitle=searchParams.get('title');
    const blogImage=searchParams.get('img');
    const blogSecondTitle=searchParams.get('secondTitle');
    const blogContent=searchParams.get('content');
    const blogCover=searchParams.get('coverImg');
  return (

    <div className='h-auto p-10 md:p-28 flex justify-center items-center text-black bg-gray-100'>
      <div className='h-auto w-[700px] flex flex-col items-center p-5 border-2 border-gray-300'>
        <div className='flex w-full flex-col justify-start items-start mb-2 '>
        <h1 className='h4 md:h2  flex justify-start max-w-[500px]' >{blogTitle}</h1>
        <p className='text-gray-400 text-sm max-w-[500px] '>{blogSecondTitle}</p>

        </div>
        <div className='relative  w-full h-[250px]'>

        <Image fill className='px-5' alt={blogTitle!} src={blogCover!}></Image>
        </div>
      
        <p className='font-semibold mt-3 text-sm'>{blogContent}</p>
      </div>
    </div>
)
}

export default Page
// 'use client'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'

// const page = (
//     //   {blog,}:{blog:{
//         //     title:string,
//         //     date:string,
//         //     img:string
//         // };}
//     ) => {
//     const searchParams=useSearchParams();
// const title= searchParams.title;

//     // console.log(blog.title)
//   return (
//     <div className='h-screen pt-40 text-black bg-purple-700'>{}</div>
//   )
// }

// export default page