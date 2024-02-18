import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type Props = { icon: any; children: React.ReactNode; to: Url };

export const ContactLink = ({ icon, children, to }: Props) => {
  return (
    <div className="flex items-center flex-nowrap gap-x-2 cursor-pointer text-xl">
      <FontAwesomeIcon icon={icon} className="min-w-[24px] w-[24px] h-[24px]" />
      <Link href={to} target="_blank" className="transition-all hover:text-2xl">
        {children}
      </Link>
    </div>
  );
};
