'use client'
import React, { useState, useEffect } from 'react';


const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="fixed top-0 left-0 w-full h-full bg-red-600 flex justify-center items-center z-50">
        <div className="text-center">
          <img
            src="/grayscale_transparent.png"
            alt="Logo"
            className="w-[50%] mx-auto"
          />
          
         
        </div>
      </div>
    )
  );
};

export default Loader;
