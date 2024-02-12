import React, { useEffect, useRef } from "react";

import BgVideoStyles from "./background-video.module.css";

type Props = { className?: string; src: string };

export const BackgroundVideo = ({
  className = BgVideoStyles.bgVideo,
  src,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play() as unknown as React.MutableRefObject<HTMLVideoElement>;
  }, []);

  return (
    <video
      autoPlay={true}
      loop
      muted={true}
      ref={videoRef}
      className={className}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
