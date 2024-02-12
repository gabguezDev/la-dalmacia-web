import React from "react";

import TitleStyles from "./banner-title.module.css";

type Props = { children: React.ReactNode; className?: string };

export const BannerTitle = ({
  children,
  className = TitleStyles.title,
}: Props) => {
  return <h1 className={className}>{children}</h1>;
};
