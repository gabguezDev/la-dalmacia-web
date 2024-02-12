import { StaticImport } from "next/dist/shared/lib/get-img-props";

import React from "react";

import { Logo } from "../navbar";

import bannerImgSyles from "./banner-img.module.css"

type Props = {
  src: string | StaticImport;
  alt: string;
  width: number;
  className?: string;
};

export const BannerImg = ({
  src,
  alt,
  width,
  className = bannerImgSyles.bannerImg,
}: Props) => {
  return <Logo src={src} alt={alt} width={width} className={className} />;
};
