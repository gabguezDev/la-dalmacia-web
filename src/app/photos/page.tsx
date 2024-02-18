import { Suspense } from "react";

import "../globals.css";

import { Metadata } from "next";

import { ContactLink } from "@/components/contact-link/contact-link";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faGear } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loteoladalmacia.com/info"),
  title: "Galería | Loteo La Dalmacia ",
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
        <div className="bg-yellow-800 text-white p-4 rounded-lg xl:w-1/3 h-96 flex flex-col items-center justify-between gap-y-4">
          <h3 className="font-bold text-xl text-center w-full ">
            Mientras actualizamos esta sección...
          </h3>
          <FontAwesomeIcon
            icon={faGear}
            className="min-w-[50px] w-[50px] h-[50px] animate-spin"
          />
          <h2 className="font-bold text-3xl text-center w-full ">
            Podes seguirnos en instagram y enterarte de todos los avances!
          </h2>
          <div className="flex flex-col gap-y-8">
            <ContactLink
              to={"https://www.instagram.com/loteoladalmacia/"}
              icon={faInstagram}
            >
              @loteoladalmacia
            </ContactLink>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
