import { UnderConstruction } from "@/components/under-construction/under-construction";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Información | Loteo La Dalmacia ",
  description:
    "Loteo 'La Dalmacia' en Santa Inés, Garupá, Misiones | Gregori - Desarrollo e Inversiones",
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
