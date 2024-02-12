import React from "react";

import NavbarStyles from "./navbar.module.css";

type Props = { className?: string; children: React.ReactNode };

export const Navbar = ({
  children,
  className = NavbarStyles.navbar,
}: Props) => {
  return <nav className={className}>{children}</nav>;
};
