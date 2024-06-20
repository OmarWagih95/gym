import React from 'react'

const ClassDetails = ({params}:{
  params: {
    classDetails: string
  }
} ) => {
  
  console.log(params.classDetails);
  return (
    <div className='bg-white pt-20 text-black flex justify-center items-center w-screen h-screen'>
      <h1 className='h4'>INFORMATION WILL BE ADDED SOON</h1>
    </div>
  )
}

export default ClassDetails