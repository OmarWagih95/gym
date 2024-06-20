import React from 'react'

const ClassDetails = ({params}:{
  params: {
    classDetails: string
  }
} ) => {
  
  console.log(params.classDetails);
  return (
    <div className='bg-white pt-20 text-black w-screen h-screen'>{params.classDetails}</div>
  )
}

export default ClassDetails