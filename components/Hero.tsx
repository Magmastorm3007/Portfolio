import React from "react";
import {useRef} from 'react';

const Hero = () => {
  const ref = useRef(null);

  const handlescroll=()=>{
    window.scrollBy(0, 480);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center tracking-wider">
        <h1 className="pb-4 text-5xl font-bold font-kaushan">
          Shashwat Nath
        </h1>
        <h3 className="pb-4 text-2xl font-bold font-kaushan">
          MERN Stack Developer
        </h3>
      </div>
      <div className="p-2">
        <button onClick={handlescroll}className="p-2 w-[180px] text-xl font-kaushan">
          Scroll
        </button>
      </div>
    </div>
  );
};

export default Hero;
