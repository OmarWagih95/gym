import React from 'react'

const CustomeButton = ({text}:{text:string;}) => {
  return (
    <button className='group rounded-sm w-[180px] h-[52px] relative cursor-pointer overflow-hidden bg-accent uppercase'>
       <span className='ease absolute  h-0 w-64 origin-center
        bg-black transition-all duration-300 group-hover:h-64 grouo-hover:-translate-y-32'>

        <span  className=' ease relative transition duration-300 uppercase text-white'>
            {text}
        </span>
       </span>

    </button>
  )
}

export default CustomeButton