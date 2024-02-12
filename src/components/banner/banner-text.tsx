import React from "react";

import BannerTextStyles from "./banner-text.module.css";

type Props = { children: React.ReactNode; className?: string };

export const BannerText = ({
  children,
  className = BannerTextStyles.bannerText,
}: Props) => {
  return <p className={className}>{children}</p>;
};
