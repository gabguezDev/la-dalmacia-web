import { UnderConstruction } from "@/components/under-construction/under-construction";
import "../globals.css";

import { Suspense } from "react";
import { Metadata } from "next";

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
    <main className="min-h-screen flex items-center justify-center mt-32 lg:mt-0 px-6 lg:p-24 bg-transparent -z-10">
      <Suspense>
        <UnderConstruction />
      </Suspense>
    </main>
  );
}
