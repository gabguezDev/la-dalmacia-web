import React from "react";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import LinkStyles from "./link.module.css";

interface NavLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to: Url;
  className?: string;
}

export const NavLink = ({
  to,
  children,
  className = LinkStyles.link,
}: NavLinkProps) => {
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
};
