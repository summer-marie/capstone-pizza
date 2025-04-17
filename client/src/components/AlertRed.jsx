import React from "react"

const AlertRed = ({ alertMsg, alertDesription }) => {
  return (
    <div className='rounded-lg w-[600px] h-32  bg-red-800/80 text-[#ffffff] mx-auto sticky z-20'>
      <div className='flex flex-row gap-5 justify-center items-center px-5 w-full h-full'>
        <div className='my-auto text-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-alert-circle'
            width='50'
            height='50'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='12' x2='12' y1='8' y2='12'></line>
            <line x1='12' x2='12.01' y1='16' y2='16'></line>
          </svg>
        </div>

        <div>
          <div className='font-bold text-lg'>{alertMsg}</div>
          <div className=' text-base'>{alertDesription}</div>
        </div>
      </div>
    </div>
  )
}

export default AlertRed
