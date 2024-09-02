import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Whatwedo from './components/whatwedo'

function page() {
  return (
    <>
    <div className='flex  p-[0.75em] h-max w-full justify-center items-center'>
      <div className='w-full  pb-[1.5em] px-[1.5em] pt-[1.25em] border border-[#191919]  h-full'>
        <Header/>
        <Hero/>
      </div>
    </div>
    <Whatwedo/>
    </>
  )
}

export default page
