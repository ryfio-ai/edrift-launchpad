import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CorporateSection from "@/components/CorporateSection";
import ProductPortfolio from "@/components/ProductPortfolio";
import TechSpecStrip from "@/components/TechSpecStrip";
import ProductsView from "@/components/ProductsView";
import EngineeringView from "@/components/EngineeringView";
import ChatBubble from "@/components/ChatBubble";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");
  const [productFilter, setProductFilter] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const handleViewProducts = () => {
    setProductFilter("all");
    setCurrentView("products");
  };

  const handleProductFilter = (category: string) => {
    setProductFilter(category);
    setCurrentView("products");
  };

  return (
    <div className="min-h-screen">
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        onProductFilter={setProductFilter}
      />

      {currentView === "home" && (
        <>
          <HeroSection onViewProducts={handleViewProducts} />
          <CorporateSection />
          <ProductPortfolio onProductClick={handleProductFilter} />
          <TechSpecStrip />
        </>
      )}

      {currentView === "products" && (
        <ProductsView initialCategory={productFilter} />
      )}

      {currentView === "engineering" && <EngineeringView />}

      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
