import Header from "../components/Header";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HomeSection from "../sections/HomeSection";
import PortfolioSection from "../sections/PortfolioSection";

export default function StartPage() {
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
