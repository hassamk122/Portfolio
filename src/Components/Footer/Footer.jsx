import React from 'react'

function Footer() {
  return (
    <>
    <div className='flex items-center justify-center flex-col mt-5 sm:mt-10 font-quicksand text-zinc-100 text-center'>
              <p className='text-teal-400 text-xs sm:text-sm dark:drop-shadow-[0px_2px_15px_rgba(0,213,190,0.3)] font-semibold '>Looking for a Designer?</p>
                <p className='pt-1 text-[10px] sm:text-sm'>💌 Contact me at hassamkiani66@gmail.com.</p>
              </div>
    <div className='flex font-quicksand items-center justify-center mt-10  border-t dark:border-t-zinc-100/5 border-t-zinc-200/30 w-full p-2 overflow-hidden'>
        <h5 className='flex items-center justify-center text-xs sm:text-sm dark:text-zinc-500'>© 2025 | Muhammad Hassam</h5>
       </div>
       </>
    )
}

export default Footer