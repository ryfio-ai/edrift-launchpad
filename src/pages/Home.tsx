import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutPreview from "@/components/AboutPreview";
import ProductPortfolio from "@/components/ProductPortfolio";
import ClientsSection from "@/components/ClientsSection";
import TechSpecStrip from "@/components/TechSpecStrip";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutPreview />
      <ProductPortfolio />
      <ClientsSection />
      <TechSpecStrip />
    </>
  );
};

export default Home;
