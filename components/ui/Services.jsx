import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiGame } from "react-icons/bi";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <div className="flex flex-col items-center bg-white md:w-[150px] md:h-[100px] w-[130px] h-[80px] shadow-lg shadow-black justify-center rounded-2xl">
        <div className="bg-blue-600/95 text-white p-2 rounded-full text-xl">
          <BiGame />
        </div>
        <h1>Oyun</h1>
      </div>
      <div className="flex flex-col items-center bg-white md:w-[150px] md:h-[100px] w-[130px] h-[80px] shadow-lg shadow-black justify-center rounded-2xl">
        <div className="bg-blue-600/95 text-white p-2 rounded-full text-xl">
          <TfiWorld />
        </div>
        <h1>Web</h1>
      </div>
      
    </div>
  );
};

export default Services;
