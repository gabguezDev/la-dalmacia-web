import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Image from "next/image";

type Props = {
  alt: string;
  src: string | StaticImport;
  width: number;
  height?: number;
  className?: string;
};

export const Logo = ({
  alt,
  src,
  width,
  height,
  className = "border rounded-lg",
}: Props) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      priority={true}
    />
  );
};
