import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Buy = () => {
  return (
    <>
      <Head>
        <title>Seredia Yazılım - Satın al</title>

        <meta
          name="description"
          content="Serendia Yazılım - Hizmetlerimiz Satın al"
        />
      </Head>
      <Header />
      <div className="flex flex-col gap-10 items-center mt-20">
        <div className="flex flex-wrap justify-center gap-2">
          <div>
            <button className="bg-orange-600 w-[130px] h-[40px] text-white rounded-lg hover:bg-blue-700">
              Web Tasarım
            </button>
          </div>
          <div>
            <button className="bg-blue-600 w-[130px] h-[40px] text-white rounded-lg hover:bg-blue-800">
              Oyun
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white shadow-lg shadow-black md:w-[400px] w-full md:rounded-bl-[10px] md:rounded-tl-[50px] md:rounded-tr-[10px] md:rounded-br-[50px]">
            <div className="relative w-full h-[200px]">
              <Image
                alt="bgimg"
                src={"/img/bg.jpg"}
                className="md:rounded-tl-[50px] md:rounded-tr-[10px]"
                fill
              />
            </div>
            <div className="text-center flex items-center px-3 justify-center gap-5 mt-10">
              <div className="">
                <h1 className="font-mono font-bold">Web Tasarım</h1>
                <span className="text-[12px] font-bold">6/22/2008</span>
              </div>
              <p className="text-[12px] font-medium w-[200px] md:font-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem iusto esse mollitia, iste recusandae, unde nemo.
              </p>
            </div>
            <button className="py-5 flex justify-center w-full bg-blue-600 md:rounded-bl-[10px] md:rounded-br-[50px] mt-10 text-white font-bold font-mono">
              Satın al
            </button>
          </div>
          <div className="bg-white shadow-lg shadow-black md:w-[400px] w-full md:rounded-bl-[10px] md:rounded-tl-[50px] md:rounded-tr-[10px] md:rounded-br-[50px]">
            <div className="relative w-full h-[200px]">
              <Image
                alt="bgimg"
                src={"/img/bg.jpg"}
                className="md:rounded-tl-[50px] md:rounded-tr-[10px]"
                fill
              />
            </div>
            <div className="text-center flex items-center px-3 justify-center gap-5 mt-10">
              <div className="">
                <h1 className="font-mono font-bold">Web Tasarım</h1>
                <span className="text-[12px] font-bold">6/22/2008</span>
              </div>
              <p className="text-[12px] font-medium w-[200px] md:font-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem iusto esse mollitia, iste recusandae, unde nemo.
              </p>
            </div>
            <button className="py-5 flex justify-center w-full bg-blue-600 md:rounded-bl-[10px] md:rounded-br-[50px] mt-10 text-white font-bold font-mono">
              Satın al
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buy;
