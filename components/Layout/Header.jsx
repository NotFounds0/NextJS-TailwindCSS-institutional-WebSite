import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpenNav, setOpenNav] = useState(false);
  return (
    <nav className=" border-b-2 border-gray-600 shadow-lg shadow-black h-[100px] flex items-center justify-between px-10">
      <div className="md:flex items-center gap-3">
        <Image
          src={"/img/serendia.png"}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-xl text-white hidden md:flex">
          <span className="text-blue-600 font-bold">Serendia</span> Yazılım
        </h1>
      </div>
      <div>
        <button
          onClick={() => setOpenNav(!isOpenNav)}
          className="p-2 md:hidden hover:bg-blue-600 rounded-lg bg-blue-600/40 text-white flex items-center justify-center"
        >
          <AiOutlineMenu />
        </button>
        <div className={`z-50`}>
          <ul
            className={`md:flex hidden md:static bg-gray-800 md:bg-transparent absolute top-[100px] w-full h-[130px] justify-center items-center text-center left-0 md:gap-3 text-gray-300 font-medium`}
          >
            <li className="">
              <a href="#">AnaSayfa</a>
            </li>
            <li className="">
              <a href="#">Hizmetlerimiz</a>
            </li>
            <li className="">
              <a href="#">Satın al</a>
            </li>
            <li className="">
              <a href="#">Hakkımızda</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
