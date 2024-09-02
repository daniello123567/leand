import React from 'react'
import { Syne } from 'next/font/google'
import Image from 'next/image'
const syne = Syne({weight:"500",subsets:["latin"]})
function Whatwedo() {
  return (
    <div className='bg-[#ECEDEB] p-[1em] lg:p-[2em]'><h1 className={`${syne.className}  text-center md:text-[2.25em] text-[1.75em]`}>What we do?</h1>
    <div className={`${syne.className} lg:flex gap-[1em] w-full h-max p-[2em] `}>
      <div className='w-full gap-[.6em] flex items-start px-[1.5em] pt-[1.5em] pb-[2em] h-[9.0625em] mt-[1em] border-[#D3D6B2] rounded-[0.75em] border bg-white'>
        <div className=' w-[3.5em] h-[3.5em]'>
          <Image width={500} height={300} src="/workers.png" alt=''/>
        </div>
        <div className='w-full  h-full'>
          <p className='text-[1.25em]'>Construction</p>
          <p className='text-[0.875em] leading-[21px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis.</p>
        </div>
      </div>
      <div className='w-full gap-[.6em] flex items-start px-[1.5em] pt-[1.5em] pb-[2em] h-[9.0625em] mt-[1em] border-[#D3D6B2] rounded-[0.75em] border bg-white'>
        <div className=' w-[3.5em] h-[3.5em]'>
          <Image width={500} height={300} src="/facilty.png" alt=''/>
        </div>
        <div className='w-full  h-full'>
          <p className='text-[1.25em]'>Facilty Management</p>
          <p className='text-[0.875em] leading-[21px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis.</p>
        </div>
      </div>
      <div className='w-full gap-[.6em] flex items-start px-[1.5em] pt-[1.5em] pb-[2em] h-[9.0625em] mt-[1em] border-[#D3D6B2] rounded-[0.75em] border bg-white'>
        <div className=' w-[3.5em] h-[3.5em]'>
          <Image width={500} height={300} src="/agency.png" alt=''/>
        </div>
        <div className='w-full  h-full'>
          <p className='text-[1.25em]'>Agency</p>
          <p className='text-[0.875em] leading-[21px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis.</p>
        </div>
      </div>
    </div></div>
  )
}

export default Whatwedo
