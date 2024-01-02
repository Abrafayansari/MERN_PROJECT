
import React from 'react';


const VideoBackground = () => {
  return (
    <div className="relative">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://youtu.be/oSexfR0Ubzw" type="video/mp4" />
      
      </video>

  
      
    </div>
  );
};

export default VideoBackground;
