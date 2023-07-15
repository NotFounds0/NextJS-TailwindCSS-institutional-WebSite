import Image from "next/image";
import React from "react";

const ProjectUİ = () => {
  return (
    <div className="px-10 mt-10  flex flex-wrap gap-10 justify-center">
      <div className="hover:scale-105 hover:-translate-y-6 duration-300 h-[200px] md:w-[470px] w-full justify-center shadow-lg shadow-black flex px-5 rounded-bl-[10px] rounded-tl-[50px] rounded-tr-[10px] rounded-br-[50px]">
        <div className="flex items-center gap-2">
          <div className="relative w-[100px] h-[100px] ">
            <Image
              src={"/img/serendia.png"}
              alt="logo"
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="flex flex-col text-[20px] text-blue-600 font-bold">
              Serendia Yazılım
            </h1>
          </div>
        </div>
      </div>
      <div className="hover:scale-105 hover:-translate-y-6 duration-300 h-[200px] md:w-[470px] md:justify-start w-full justify-center shadow-lg shadow-black flex px-5 rounded-bl-[50px] rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px]">
        <div className="flex items-center gap-2">
          <div className="relative w-[100px] h-[100px] ">
            <Image
              src={"/img/modLogo.png"}
              alt="logo"
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="flex flex-col text-[20px] text-blue-600 font-bold">
              Serendia Mod
              <span className="text-[15px] font-mono text-black underline underline-offset-2">
                Oyunlarda Yaratıcılığın Ötesi
              </span>
            </h1>
            <p className="text-[12px] w-[320px] font-bold md:flex hidden">
              Oyunlara yeni bir soluk getiren muhteşem modlarıyla dikkat
              çekiyor. Ücretsiz veya ücretli seçenekler sunan bu modlar,
              oyunseverlere unutulmaz deneyimler sunuyor. özenle tasarlanan
              modlar, yüksek kaliteli grafikleriyle öne çıkıyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUİ;
