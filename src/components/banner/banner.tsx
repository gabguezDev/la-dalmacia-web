import React from "react";

import BannerStyles from "./banner.module.css";

type Props = { children: React.ReactNode; className?: string };

export const Banner = ({
  children,
  className = BannerStyles.banner,
}: Props) => {
  return <div className={className}>{children}</div>;
};
