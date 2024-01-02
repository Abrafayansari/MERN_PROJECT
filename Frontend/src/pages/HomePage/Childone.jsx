import React, { useEffect, useState } from 'react'
import App from '../../React-spring/main'


const Childone = () => {
  const [selectedImage, setSelectedImage] = useState('https://wallpaperaccess.com/full/345330.jpg')
  const images = ["https://www.freep.com/gcdn/-mm-/988b62565516994c793e0973fc42dfa30e98f93f/c=336-0-3665-2503/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg", 'https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1556016297737-7BZLAV83VOV0BS9VQUQH/_ABX2402.jpg?format=2500w',"https://cdn.sanity.io/images/6sugrgl1/production/9e5240303b393090493918509cf6aab4cda1c465-1440x961.jpg?rect=0,162,1440,639&w=1988&h=882&fit=crop","https://images6.alphacoders.com/109/1092054.jpg","https://wallpapers.com/images/hd/giraffe-silhouette-in-masai-mara-national-reserve-kgu5axn4rx1ml9ot.jpg","https://wallpapers.com/images/hd/sunset-in-dubai-t2x9l1xxgfp9zb0g.jpg","https://i.pinimg.com/originals/26/a9/e7/26a9e7f3a35eb0b05871dcce147f2655.jpg","https://cdn.tourradar.com/s3/tour/1500x800/115616_5e26ff015b0d9.jpg"]
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the next image index
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;

      // Update the state with the next image
      setSelectedImage(images[nextIndex]);
    }, 5000); // Delay in milliseconds
    
    // Clear the interval to prevent it from running on component unmount or re-render
    return () => clearInterval(intervalId);
  }, [selectedImage, images]);
  return (
  <div id="firstchild" className={`flex  h-[100vh]  bg-cover flex-col  `} style={{transition: "all",backgroundImage: `url(${selectedImage})`}}>
  
     {/* <h1 className='mt-40 ml-[7vw]'>Adventure Awaits,</h1> <h1 className='ml-[14vw]'>Explore More</h1>  */}
   <div className=" text-white h-[100vh]   w-[100vw] rounded-md bg-black flex flex-col  bg-opacity-60  text-[50px] " > 
   <div className='mt-40  ml-[8vw]'>
   <App/>
   </div>
   </div>
    
   
   </div>
  )
}
// #ED1C24
export default Childone
