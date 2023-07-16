import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ProjectUİ from "@/components/ui/ProjectUİ";
import Services from "@/components/ui/Services";
import Head from "next/head";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seredia Yazılım</title>
        <link rel="icon" href="/img/serendia.png" type="icon" />
        <meta
          name="description"
          content="Serendia Yazılım - Kalite & Tecrübe"
        />
      </Head>

      {/* Arkaplan */}
      <div className="bg">
        <Header />
        <div className="text-center mt-20">
          <h1 className="md:text-3xl font-mono text-white font-bold">
            <span className="text-blue-600">Serendia</span> Yazılım Hizmetleri
          </h1>
          <p className="text-white md:text-lg text-[12px]">
            Farklı alanlarda kaliteli ve hızlı hizmetler
          </p>
        </div>
      </div>

      {/* Projeler */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="md:text-2xl font-bold font-mono">Projelerimiz</h1>
        <p className="md:text-lg">Farklı alanlarda Projelerimiz</p>
        <ProjectUİ />
      </div>

      {/* Hizmetler */}
      <div className="flex  flex-col items-center gap-3 mt-32">
        <h1 className="md:text-2xl font-bold font-mono text-lg">
          Hizmetlerimiz
        </h1>
        <p className="md:text-lg text-[12px]">
          Farklı alanlarda tecrübeli ve hızlı hizmetler
        </p>
        <Services />
      </div>

      <Footer />
    </>
  );
}
