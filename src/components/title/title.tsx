import React from "react";

interface H1Props extends React.HtmlHTMLAttributes<H1Props> {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: H1Props) => {
  return <h1 className={className}>{children}</h1>;
};
