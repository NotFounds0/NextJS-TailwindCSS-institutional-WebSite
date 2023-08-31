import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  const [isOpenNav, setOpenNav] = useState(false);
  return (
    <nav
      className={`${
        router.asPath === "/" ? "bg-transparent" : "bg-gray-800"
      } border-b-2 border-gray-600 shadow-lg shadow-black h-[100px] flex items-center justify-between px-10`}
    >
      <div className="md:flex items-center gap-3">
        <Image
          src={"/img/serendia.png"}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-xl text-white hidden md:flex">
          <span className="text-blue-600 font-bold">Company </span> Name
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
            className={`md:flex hidden md:static bg-gray-800 md:bg-transparent absolute top-[100px] w-full h-[130px] justify-center items-center text-center left-0 md:gap-3 `}
          >
            <li className="">
              <Link
                href="/"
                className={`${
                  router.asPath === "/"
                    ? "text-blue-500 font-medium underline underline-offset-4"
                    : "text-gray-300 font-medium"
                }`}
              >
                AnaSayfa
              </Link>
            </li>
            <li className="">
              <Link
                href="/Services"
                className={`${
                  router.asPath === "/Services"
                    ? "text-blue-500 font-medium underline underline-offset-4"
                    : "text-gray-300 font-medium"
                }`}
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li className="">
              <Link
                href="/Buy"
                className={`${
                  router.asPath === "/Buy"
                    ? "text-blue-500 font-medium underline underline-offset-4"
                    : "text-gray-300 font-medium"
                }`}
              >
                Satın al
              </Link>
            </li>
            <li className="">
              <Link
                href="/Abouts"
                className={`${
                  router.asPath === "/Abouts"
                    ? "text-blue-500 font-medium underline underline-offset-4"
                    : "text-gray-300 font-medium"
                }`}
              >
                Hakkımızda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
