import React from "react";

import BgVideoStyles from "./background-video.module.css";

type Props = { className?: string; src: string };

export const BackgroundVideo = ({
  className = BgVideoStyles.bgVideo,
  src,
}: Props) => {
  return (
    <video autoPlay loop muted className={className}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
