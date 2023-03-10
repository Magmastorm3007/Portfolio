import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>
      <div className="grid items-center grid-cols-4 gap-4 font-inter">
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          ReactJS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          EXPRESSJS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          FIREBASE
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          MYSQL
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
        BOOTSTRAP
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          MONGODB
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          C++
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
         Unity
        </div>
      </div>
    </div>
  );
};

export default Skills;
