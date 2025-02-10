import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Navbar } from "../Components/Navbar/Navbar";
import { Main } from "../Components/Main/Main";
import { Footer } from "../Components/Footer/Footer";
import { Grid } from "../Components/Grid/Grid";

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid>
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <Navbar isOpen={isOpen} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Grid>
  );
};

