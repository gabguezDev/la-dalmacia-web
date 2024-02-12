import React from "react";

import { BannerImg } from "@/components/banner";

import LoteoLaDalmaciaLogo from "../../public/la-dalmacia-loteo.jpg";

export default function loading() {
  return (
    <BannerImg
      src={LoteoLaDalmaciaLogo}
      alt="Imagen Loteo La Dalmacia"
      width={500}
      className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
    />
  );
}
