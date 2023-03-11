import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col ml-[120px]">
      <div className="pb-2 text-center font-inter">
      <div className="w-[400px] h-[350px]"></div>
     
  
      <div className="grid items-center grid-cols-3 gap-6 font-inter">
        
      <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded ">
            <Image
              src="/weather.jpg"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                Weather Forecast App
              </div>
              <p className="text-base text-gray-700">
              It uses Open Weather API to fetch the weather details and changes backgrounds
accordingly as per the location given
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
            <Link href="http://shashwatnath.me/MyWeatherApp/"><button className="p-2">View site</button></Link> 
            </div>
          </div>
        </div>
        
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
        <div className="w-[100%] h-[100%] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
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
          <div className="w-[100%] h-[100%]  p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
            </div>
       
          </div>
          <div className="backg">
    <div className="planet">
      <div className="r1"></div>
      <div className="r2"></div>
      <div className="r3"></div>
      <div className="r4"></div>
      <div className="r5"></div>
      <div className="r6"></div>
      <div className="r7"></div>
      <div className="r8"></div>
      <div className="shad"></div>
    </div>
    <div className="stars">
      <div className="s1"></div>
      <div className="s2"></div>
      <div className="s3"></div>
      <div className="s4"></div>
      <div className="s5"></div>
      <div className="s6"></div>
    </div>
    <div className="an">
      <div className="tank"></div>
      <div className="astro">
          
          <div className="helmet">
            <div className="glass">
              <div className="shine"></div>
            </div>
          </div>
          <div className="dress">
            <div className="c">
              <div className="btn1"></div>
              <div className="btn2"></div>
              <div className="btn3"></div>
              <div className="btn4"></div>
            </div>
          </div>
          <div className="handl">
            <div className="handl1">
              <div className="glovel">
                <div className="thumbl"></div>
                <div className="b2"></div>
              </div>
            </div>
          </div>
          <div className="handr">
            <div className="handr1">
              <div className="glover">
                <div className="thumbr"></div>
                <div className="b1"></div>
              </div>
            </div>
          </div>
          <div className="legl">
            <div className="bootl1">
              <div className="bootl2"></div>
            </div>
          </div>
          <div className="legr">
            <div className="bootr1">
              <div className="bootr2"></div>
            </div>
          </div>
          <div className="pipe">
            <div className="pipe2">
              <div className="pipe3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        
      
  );
};

export default Projects;