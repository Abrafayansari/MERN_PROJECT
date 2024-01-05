import React from 'react'

const Childthree = () => {
  return (
    <div className='  h-[100vh] w-[100%]'>
      <div><h1 className='text-[48px]  ml-[10vw] font-bold text-[#1c262f]'>Tour highlights</h1>
      <p className='text-[#415161] ml-[10vw] w-[60vw] mt-5 text-[20px]'>Would you like to go on a photo tour? Our guides know exactly what you need! The sceneries we have for you are going to make your vacation unforgettable!</p></div>
      <div className='mt-20 flex ml-[10vw] gap-6 text-center'>
        <div>
        <div className='h-80 w-[20vw] border-2 bg-cover bg-[url("https://images6.alphacoders.com/109/1092054.jpg")]'></div>
        <h1 className='text-[#415161] text-3xl font-bold mt-6 '>Tokyo</h1>
        <h1  className='text-[#415161]'>Day <span>1</span></h1>
        </div>
        <div>
        <div className='h-80 w-[20vw] border-2 bg-cover bg-[url("https://wallpapers.com/images/hd/romantic-eiffel-paris-babqqvmcylchhb6i.jpg")]'></div>
        <h1 className='text-[#415161] text-3xl font-bold mt-6 '>Paris</h1>
        <h1  className='text-[#415161]'>Day <span>2</span></h1>
        </div>
        <div>
        <div className='h-80 w-[20vw] border-2 bg-cover bg-[url("https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1556016297737-7BZLAV83VOV0BS9VQUQH/_ABX2402.jpg?format=2500w")]'></div>
        <h1 className='text-[#415161] text-3xl font-bold mt-6 '>Rome</h1>
        <h1  className='text-[#415161]'>Day <span>3</span></h1>
        </div>
        <div>
        <div className='h-80 w-[20vw] border-2 bg-cover bg-[url("https://wallpapers.com/images/hd/sunset-in-dubai-t2x9l1xxgfp9zb0g.jpg")]'></div>
        <h1 className='text-[#415161] text-3xl font-bold mt-6 '>Dubai</h1>
        <h1  className='text-[#415161]'>Day <span>4</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Childthree
