import { Metadata } from "next";
import Link from "next/link";

import { Suspense } from "react";

import {
  Banner,
  BannerImg,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from "@/components/banner";

import { BackgroundVideo } from "@/components/background-video/background-video";

import { Button } from "@/components/button/button";

import LoteoLaDalmaciaLogo from "../../../public/la-dalmacia-loteo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareCheck,
  faLocationDot,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { InfoItem } from "@/components/info-item/info-item";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loteoladalmacia.com/info"),
  title: "Información | Loteo La Dalmacia ",

  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/es-AR",
    },
  },
  description:
    "Loteo 'La Dalmacia' en Santa Inés, Garupá, Misiones | Gregori - Desarrollo e Inversiones",
  openGraph: {
    images: "/og-image.png",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center mt-32 lg:mt-0 px-6 lg:p-24 bg-transparent -z-10">
      <Suspense>
        <Banner>
          <BackgroundVideo src="/videos/pinos-video-1.mp4" />
          <div className="w-full px-3 py-8 mt-4 flex flex-col items-start gap-y-8 backdrop-blur-sm lg:mr-8 lg:p-8 rounded-lg bg-white">
            <BannerTitle className="text-3xl text-center xl:text-left w-full">
              Información
            </BannerTitle>
            <BannerSubtitle className="text-xl font-semibold">
              Descubrí Loteo &quot;La Dalmacia&quot;, una oportunidad única de
              vivir en un entorno natural privilegiado en el corazón de
              Misiones.
            </BannerSubtitle>
            <div className="flex flex-col gap-y-1">
              <span className="font-bold">Ubicación</span>
              <InfoItem fsIcon={faLocationDot} iconColor="red">
                Barrio Santa Inés, municipio Garupá, provincia de Misiones,
                Argentina.
              </InfoItem>
              <InfoItem fsIcon={faCircleInfo} iconColor="blue">
                A metros de la ruta 105, con fácil acceso a la ciudad de Posadas
                y a los principales atractivos turísticos de la zona.
              </InfoItem>

              <br />
              <Button className="button button--secondary self-center flex items-center flex-nowrap gap-x-2">
                <Link href={"https://maps.app.goo.gl/4Co5hLb5wGNiPJdX9"}>
                  Ir a Google Maps
                </Link>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="min-w-[25px] w-[25px] h-[25px]"
                />
              </Button>
              <span className="font-bold">Características</span>

              <InfoItem fsIcon={faSquareCheck} iconColor="green">
                46 lotes de diferentes medidas, ideales para construir la casa
                de tus sueños.
              </InfoItem>

              <InfoItem fsIcon={faSquareCheck}>
                Entorno natural único: varios de los lotes cuentan con
                plantaciones de pinos y una laguna natural.
              </InfoItem>
              <InfoItem fsIcon={faSquareCheck}>
                Ideal para amantes de la naturaleza y la tranquilidad: un lugar
                perfecto para disfrutar del aire puro, la paz y el sonido de las
                aves.
              </InfoItem>
              <InfoItem fsIcon={faSquareCheck}>
                Servicios: agua corriente, energía eléctrica, alumbrado público
                y calles enripiadas.
              </InfoItem>
              <InfoItem fsIcon={faSquareCheck}>
                Financiación: planes de pago accesibles para que puedas alcanzar
                tu sueño de vivir en &quot;La Dalmacia&quot;.
              </InfoItem>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-y-6 lg:gap-x-6">
              <Button className="button button--primary">
                <Link href={"/contact"}>Contactanos</Link>
              </Button>
              <Button className="button button--secondary">
                <Link href={"/photos"}>Ver imágenes</Link>
              </Button>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14155.172120133333!2d-55.8579377!3d-27.5068115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457b7001f6b8d81%3A0x6b4fd39a60a788ab!2sLa%20Dalmacia!5e0!3m2!1ses!2sar!4v1708288666333!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Banner>
      </Suspense>
    </main>
  );
}
