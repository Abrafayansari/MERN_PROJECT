import React from 'react';


function VideoBackground() {
  return (
    <div className="relative">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="/assets/sea.mp4" type="video/mp4" />
      </video>
      {/* Other content goes here */}
    </div>
  );
}

export default VideoBackground;