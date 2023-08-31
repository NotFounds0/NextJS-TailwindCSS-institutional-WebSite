import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Abouts = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Serendia Yazılım - Hakkımızda</title>
        <meta
          name="description"
          content="Serendia Yazılım - Hakkımızda & Biz kimiz"
        />
      </Head>
      <h1 className="text-center text-3xl font-bold mt-10">Biz Kimiz?</h1>
      {/* vizyon */}
      <div className="flex flex-wrap justify-center gap-10 mt-32 items-center">
        <div className="relative md:w-[500px] w-full h-[280px]">
          <Image src={"/img/vizyon.png"} alt="" fill />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-mono font-bold">Vizyonumuz</h1>
          <p className="lg:w-[600px] w-auto text-[15px] px-3">
            Seredia Yazılım olarak, geleceğin teknolojilerini şekillendirerek
            dünyada öncü bir konuma ulaşmayı hedefliyoruz. İnovasyonu,
            yaratıcılığı ve mükemmeliyeti merkezine alan çözümlerimizle,
            insanların yaşamlarını dönüştürmeyi ve işletmelerin potansiyellerini
            maksimize etmeyi amaçlıyoruz.
          </p>
        </div>
      </div>
      {/* misyon */}
      <div className="flex flex-wrap-reverse justify-center gap-10 mt-20 items-center">
        <div className="text-center">
          <h1 className="text-2xl font-mono font-bold">Misyonumuz</h1>
          <p className="lg:w-[600px] w-auto text-[15px] px-3">
            Müşterilerimize öncelik vererek, onların ihtiyaçlarına yönelik
            yenilikçi yazılım çözümleri sunmak için çalışıyoruz. Müşteri odaklı
            yaklaşımımız, müşterilerimizin başarısına katkıda bulunmak ve
            onlarla uzun vadeli iş birlikleri kurmak üzerine odaklanmamızı
            sağlıyor.
          </p>
        </div>
        <div className="relative md:w-[500px] w-full h-[280px]">
          <Image src={"/img/misyon.jpg"} alt="" fill />
        </div>
      </div>
      {/* Değerler */}
      <div className="flex flex-col items-center text-center mt-20">
        <h1 className="text-2xl font-mono font-bold">Değerler</h1>
        <p className="w-[500px] text-[15px] px-3">
          İşimizi titizlikle yaparken, dürüstlük, şeffaflık ve güvenilirlik
          ilkelerini koruyoruz. Değerlerimiz arasında kaliteye odaklanmak, ekip
          çalışmasını teşvik etmek ve sürekli öğrenmeyi desteklemek de
          bulunmaktadır. Sürdürülebilirlik ve toplumsal sorumluluk,
          faaliyetlerimizin temel unsurlarıdır.
        </p>
      </div>
      {/* Hedefler */}
      <div className="flex flex-col items-center text-center mt-20">
        <h1 className="text-2xl font-mono font-bold">Hedeflerimiz</h1>
        <span className="md:w-[600px] w-auto text-[15px] px-3">
          Seredia Yazılım olarak, müşterilerimize değer yaratan, yenilikçi ve
          ölçeklenebilir çözümler sunarak onların rekabet avantajını artırmayı
          amaçlıyoruz. Aynı zamanda teknoloji alanındaki en son gelişmeleri
          takip ederek, ürün ve hizmetlerimizi sürekli olarak iyileştirmeyi ve
          yenilikçi fikirlere açık olmayı hedefliyoruz. Global bir etki
          yaratmayı amaçlayarak, müşterilerimiz ve toplumumuz için
          sürdürülebilir bir değer oluşturmayı hedefliyoruz.
          <br />
          <br />
          <div className="border border-gray-400"></div>
          <br />
          Seredia Yazılım olarak, geleceğin teknolojilerini hayata geçirerek
          dünyada fark yaratmak istiyoruz. İnovasyon, kalite ve müşteri
          memnuniyetini temel prensiplerimiz olarak benimseyerek,
          müşterilerimizin başarısı için odaklanıyoruz. Teknolojiyle birlikte
          daha iyi bir gelecek inşa etmek için heyecanla çalışıyoruz.
        </span>
      </div>

      <Footer />
    </>
  );
};

export default Abouts;
