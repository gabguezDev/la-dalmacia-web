"use client";

import React, { useState } from "react";

import Footer from "@/components/footer/footer";

import { Navbar, Logo, LinksContainer, NavLink } from "@/components/navbar";

import laDalmaciaLoteoLogo from "../../../public/la-dalmacia-loteo.jpg";


import Loading from "../../app/loading";

type Props = { children: React.ReactNode };

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar>
        <Logo
          src={laDalmaciaLoteoLogo}
          alt="Logo Loteo La Dalmacia"
          width={100}
        />
        <LinksContainer>
          <NavLink to={"/"}>Inicio</NavLink>
          <NavLink to={"/info"}>Información</NavLink>
          <NavLink to={"/photos"}>Galería</NavLink>
          <NavLink to={"/contact"}>Contacto</NavLink>
        </LinksContainer>
      </Navbar>
      {children}
      <Footer>© Gregori | Desarrollo e Inversiones</Footer>
    </>
  );
};

export default DefaultLayout;
