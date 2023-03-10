import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col ml-[120px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      <div className="grid items-center grid-cols-3 gap-6 font-inter">
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] rounded shadow-lg">
            <Image
              src="/bookstore.jpg"
              alt="React-Ecommerce"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                React.js Ecommerce Web App
              </div>
              <p className="text-base text-gray-700">
              A MERN Stack BookStore WebApp employing MongoDB Atlas, ExpressJS, ReactJS, Firebase,StripeJS and ContextApi
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
            <Link href="http://shashwatnath.me/OnlineBookStore/#/"><button className="p-2">View site</button></Link> 
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="/chat.jpg"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              Superchat Web Socket,Cloud App
              </div>
              <p className="text-base text-gray-700">
              Chatroom Application using Google Auth and database provided by Firebase. Supports mobile version.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
            <Link href="http://shashwatnath.me/superchat/"><button className="p-2">View site</button></Link> 
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="/pixel.jpg"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-4 text-xl font-bold">
              Pixel Art Maker
              </div>
              <p className="pb-4 text-base text-gray-700">
              Create Vector Pixel art and export in PNG and JPEG formats for use in digital art and games,using SCSS and ReactJS.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
            <Link href="http://shashwatnath.me/PixelArtMaker/"><button className="p-2">View site</button></Link> 
            </div>
          </div>
        </div>
    
          </div>
          <div className="w-[400px] h-[150px]  p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
            </div>
          <div className="grid items-center grid-cols-3 gap-6 font-inter">
          <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
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
            <Link href="http://shashwatnath.me/PixelArtMaker/"><button className="p-2">View site</button></Link> 
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
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
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
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
      
  );
};

export default Projects;
