import "../globals.css";

import { Suspense } from "react";
import { Metadata } from "next";

import {
  faInstagram,
  faWhatsapp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import { ContactLink } from "@/components/contact-link/contact-link";
import { Logo } from "@/components/navbar";

import LoteoLaDalmaciaLogo from "../../../public/la-dalmacia-loteo.jpg";
import { alt } from "../opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loteoladalmacia.com/info"),
  title: "Contacto | Loteo La Dalmacia ",

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
    <main className="min-h-screen flex flex-wrap items-center justify-center mt-32 lg:mt-0 px-6 lg:p-24 bg-transparent -z-10">
      <Suspense>
        <Logo
          src={LoteoLaDalmaciaLogo}
          alt="Logo Loteo La Dalmacia"
          width={500}
          className="w-full"
        />
        <div className="bg-yellow-800 text-white p-4 rounded-lg xl:w-1/3 h-96 flex flex-col items-center justify-between gap-y-4">
          <h2 className="font-bold text-3xl text-center w-full ">
            Comunicate con nosotros
          </h2>
          <div className="flex flex-col gap-y-8">
            <ContactLink
              to={"https://www.instagram.com/loteoladalmacia/"}
              icon={faInstagram}
            >
              @loteoladalmacia
            </ContactLink>
            <ContactLink
              to={
                "https://api.whatsapp.com/send?phone=+5493764232648&text=Hola%20%F0%9F%91%8B%20Me%20comunico%20desde%20la%20web%20de%20%22Loteo%20La%20Dalmacia%22.%20%F0%9F%8F%A1%20Estoy%20interesad@%20y%20me%20gustar%C3%ADa%20que%20me%20brinden%20m%C3%A1s%20informaci%C3%B3n"
              }
              icon={faWhatsapp}
            >
              +54 376 4232648
            </ContactLink>
            <ContactLink
              to={"mailto:loteoladalmacia@gmail.com"}
              icon={faGoogle}
            >
              loteoladalmacia@gmail.com
            </ContactLink>
          </div>
          <h3 className="font-bold text-lg text-center">
            ¡Seguinos en instagram y enterate de todas las novedades!
          </h3>
        </div>
      </Suspense>
    </main>
  );
}
