import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";

const Footer = () => {
    const tarih = new Date()
  return (
    <>
      <div className="bg-blue-800 w-full h-[350px] mt-32 flex items-center justify-center">
        <div className="text-center flex flex-col gap-3 items-center relative">
          <div>
            <h1 className="font-bold text-white font-mono text-2xl">
              <span className="text-blue-400">Serendia</span> Yazılım
            </h1>
            <p className="text-white font-mono">
              Kaliteli Yazılımın Tek Adresi
            </p>
          </div>
          <div className="before:contents-[''] before:w-full before:h-1 before:bg-orange-600 before:absolute before:top-16 before:left-0"></div>
          <div className="flex gap-5 bg-white w-full items-center justify-center h-[40px] rounded-lg">
            <a
              href="#"
              className="text-pink-600 text-2xl hover:bg-blue-700 hover:text-white rounded-full p-2"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="#"
              className="text-red-700 text-2xl hover:bg-blue-700 hover:text-white rounded-full p-2"
            >
              <AiOutlineYoutube />
            </a>
            <a
              href="#"
              className="text-black text-2xl hover:bg-blue-700 hover:text-white rounded-full p-2"
            >
              <AiFillGithub />
            </a>
            <a
              href="#"
              className="text-sky-600 text-2xl hover:bg-blue-700 hover:text-white rounded-full p-2"
            >
              <BiLogoDiscordAlt />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-800">
        <div className="flex justify-center">
          <h1 className="text-white font-bold">
            Copyright © {tarih.getFullYear()} Tüm Hakları Saklıdır.{" "}
            <a href="#" className="text-orange-600">
              Serendia Yazılım
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
