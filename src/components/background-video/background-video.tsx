"use client";
import React, { useEffect, useRef } from "react";

import BgVideoStyles from "./background-video.module.css";

type Props = { className?: string; src: string };

export const BackgroundVideo = ({
  className = BgVideoStyles.bgVideo,
  src,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    };

    handlePlay();
  }, []);
  return (
    <video
      loop
      autoPlay={true}
      muted={true}
      playsInline={true}
      ref={videoRef}
      className={className}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
