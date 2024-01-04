import React from 'react'

export default function Abouttwo() {
  return (
    <div className='h-[100vh]  w-[100vw] '>
    
        <h1 className='text-[#1c262f] ml-[8vw] text-5xl font-bold'>
          Our mission
        </h1>
        <p className='ml-[8vw]  mt-10 text-[#415161] text-xl w-[60vw]'> Nullam arcu enim, dictum at pharetra pharetra, vulputate ut eros. In ante lacus, varius quis facilisis vitae, iaculis sit amet justo. Donec hendrerit diam. Pellentesque egestas risus a cursus!</p>
        <div className='h-[50vh] w-[80vw] flex justify-start gap-9 bg-slate-500 mt-14 ml-[8vw] border-2'>
            <div className='h-full w-[50%] bg-black'></div>
            <div className='h-full w-[30%] bg-orange-600'></div>
        </div>
      </div>
  )
}
