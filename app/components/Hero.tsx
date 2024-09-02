"use client"
import React from 'react'
import { Poppins,Syne } from 'next/font/google'
import Image from 'next/image';
const pop = Poppins({weight:"500",subsets:["latin"]})
const pop2= Poppins({weight:"400",subsets:["latin"]});
const syne = Syne({weight:"400",subsets:["latin"]})
function Hero() {
  return (
    <div className='mt-[2em] flex flex-col justify-center items-center text-center'>
      <p className={`${pop.className} lg:text-[4em] text-[#121718] md:text-[3.25em] md:leading-[67.6px] lg:w-[15em] text-[2.5em] text-center tracking-[-0.5px] leading-[52px]`}>We Empower <br className='hidden lg:block'/> Businesses to Forge <br className='hidden lg:block'/> Their Own Paths</p>
      <p className={`${pop2.className} lg:w-[50%] mt-[1.5em]  md:w-[70%]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla est similique dolorem impedit itaque libero repellat pariatur quas eligendi?</p>
      <button type='button' className={` ${syne.className}  w-[14.6448125em] text-[1em] mt-[1.4em] bg-[#FFCD6D] rounded-[0.5em] h-[3.625em]`}>Book an appointment now</button>
      <div className='w-full mt-[2em] md:h-[33.617em] overflow-hidden rounded-[.8em] h-[15.93125em]'>
      <video className='rounded-[.8em]' autoPlay loop >
      <source className='rounded-[.8em]' src="/hero.mp4" />
      </video>
      </div>
    </div>
  )
}

export default Hero
