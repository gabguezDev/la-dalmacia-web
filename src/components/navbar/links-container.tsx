import React from "react";

import LinksContainerStyles from "./links-container.module.css";

type Props = { children: React.ReactNode; className?: string };

export const LinksContainer = ({
  className = LinksContainerStyles.linksContainer,
  children,
}: Props) => {
  return <div className={className}>{children}</div>;
};
