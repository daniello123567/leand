import Image from 'next/image'
import React from 'react'
import { Syne,Poppins } from 'next/font/google'
const syne = Syne({weight:"600",subsets:["latin"]});
const pop = Poppins({weight:"600",subsets:["latin"]})
function Header() {
  return (
    <header className=' h-[4.1875em] flex justify-start border-b border-b-black'>
    <div className='w-full justify-between flex items-center h-[3.125em] '>
     <p className={`${syne.className}`}>LEAND SUPPORT SERVICES</p>
     <Image className='w-[1.875em] md:hidden' src="/menu.svg" alt='menu' width={500} height={300}/>
     <div className={`${pop.className} tracking-[1px] text-[ 0.75em] hidden gap-[1em] md:flex`}>
      <p>About</p>
     <p>Blog</p>
     <p>Services</p>
     <p>Contact</p>
     </div>
    </div>
    </header>

  )
}

export default Header
