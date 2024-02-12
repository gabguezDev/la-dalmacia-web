import React from "react";

import FooterStyles from "./footer.module.css";

type Props = { children: React.ReactNode; className?: string };

const Footer = ({ children, className = FooterStyles.footer }: Props) => {
  return <footer className={className}>{children}</footer>;
};

export default Footer;
