"use client";

import React, { RefObject, useEffect, useRef } from "react";

import BgVideoStyles from "./background-video.module.css";

type Props = { className?: string; src: string };

export const BackgroundVideo = ({
  className = BgVideoStyles.bgVideo,
  src,
}: Props) => {
  const vidRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    vidRef.current!.play();
  }, []);

  return (
    <video
      autoPlay={true}
      loop
      muted={true}
      ref={vidRef as RefObject<HTMLVideoElement>}
      className={className}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
