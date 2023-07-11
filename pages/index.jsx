import Header from "@/components/Layout/Header";
import ProjectUİ from "@/components/ui/ProjectUİ";
import Head from "next/head";
import { TbWorld } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seredia Yazılım</title>
        <link rel="icon" href="/img/serendia.png" type="icon" />
      </Head>

      {/* Arkaplan */}
      <div className="bg">
        <Header />
        <div className="text-center mt-20">
          <h1 className="text-3xl font-mono text-white font-bold">
            <span className="text-blue-600">Serendia</span> Yazılım Hizmetleri
          </h1>
          <p className="text-white text-lg">
            Farklı alanlarda kaliteli ve hızlı hizmetler
          </p>
        </div>
      </div>

      {/* Projeler */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold font-mono">Projelerimiz</h1>
        <p className="text-lg">Farklı alanlarda tecrübeli ve hızlı hizmetler</p>
        <ProjectUİ />
      </div>
    </>
  );
}
