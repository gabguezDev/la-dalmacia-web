import {
  Banner,
  BannerImg,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from "@/components/banner";

import "./globals.css";

import LoteoLaDalmaciaLogo from "../../public/la-dalmacia-loteo.jpg";

import { BackgroundVideo } from "@/components/background-video/background-video";
import { Button } from "@/components/button/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Loteo La Dalmacia ",
  description:
    "Loteo 'La Dalmacia' en Santa Inés, Garupá, Misiones | Gregori - Desarrollo e Inversiones",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center mt-32 lg:mt-0 px-6 lg:p-24 bg-transparent -z-10">
      <Banner>
        <BackgroundVideo src="/videos/pinos-video-1.mp4" />
        <div className="w-full px-0 py-8 mt-4 flex flex-col items-start gap-y-8 backdrop-blur-sm lg:mr-8 lg:p-8 rounded-lg">
          <BannerTitle>
            Loteo <br />
            <span className="text-6xl lg:text-9xl font-mackless-script">
              La Dalmacia
            </span>
          </BannerTitle>
          <BannerSubtitle>Gregori | Desarrollo e Inversiones</BannerSubtitle>
          <BannerText>
            ¿Estás buscando el lugar perfecto para construir tu futuro hogar,
            casa quinta o realizar una inversión?
          </BannerText>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-y-6 lg:gap-x-6">
            <Button className="button button--primary">Contactanos</Button>
            <Button className="button button--secondary">Más detalles</Button>
          </div>
        </div>
        <BannerImg
          src={LoteoLaDalmaciaLogo}
          alt="Imagen Loteo La Dalmacia"
          width={500}
        />
      </Banner>
    </main>
  );
}
