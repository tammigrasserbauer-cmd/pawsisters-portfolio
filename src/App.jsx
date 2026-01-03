import { useState } from "react";

import Header from "./components/Header";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <Header />

      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

export default App;
