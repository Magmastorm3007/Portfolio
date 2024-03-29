import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col ml-[120px]">
      <div className="pb-2 text-center font-inter">
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="w-[400px] h-[150px]"></div>
     
  
      <div className="grid items-center grid-cols-2 gap-6 font-inter">
        
      
        
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded ">
            <Image
              src="/araki.jpg"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                Ninja Araki
              </div>
              <p className="text-base text-gray-700">
              Play as Ninja Araki who must fight his way through corrupt samurais and many
challenges to save feudal Japan
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
            <Link href="https://magmastorm.itch.io/ninja-araki"><button className="p-2">View game</button></Link> 
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded ">
            <Image
              src="/Phantom.jpg"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
               Phantom Rush
              </div>
              <p className="text-base text-gray-700">
                An endless runner made during halloween gamejam.Get the highest score by avoiding Jack O' Lanterns.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
             <Link href="https://magmastorm.itch.io/phantom-rush"><button className="p-2">View game</button></Link> 
            </div>
            </div>
            </div>
    
          </div>
         
           
       
          </div>
        
        </div>
        
      
  );
};

export default Projects;