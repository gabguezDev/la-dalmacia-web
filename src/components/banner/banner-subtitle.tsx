import React from "react";

import SubtitleStyles from "./banner-subtitle.module.css";

type Props = { children: React.ReactNode; className?: string };

export const BannerSubtitle = ({
  children,
  className = SubtitleStyles.subtitle,
}: Props) => {
  return <h2 className={className}>{children}</h2>;
};
