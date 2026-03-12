import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edrift-logo.png";

interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onProductFilter?: (category: string) => void;
}

const Navbar = ({ currentView, onViewChange, onProductFilter }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProductClick = (category: string) => {
    onViewChange("products");
    onProductFilter?.(category);
    setProductsDropdown(false);
    setMobileOpen(false);
  };

  const handleNavClick = (view: string) => {
    onViewChange(view);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <button onClick={() => handleNavClick("home")} className="flex items-center gap-2">
          <img src={logo} alt="eDrift Electric" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-bold text-foreground">
            e<span className="text-primary">Drift</span> Electric
          </span>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleNavClick("home")}
            className={`nav-link ${currentView === "home" ? "active text-primary" : ""}`}
          >
            Home
          </button>

          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setProductsDropdown(true)} onMouseLeave={() => setProductsDropdown(false)}>
            <button
              className={`nav-link flex items-center gap-1 ${currentView === "products" ? "active text-primary" : ""}`}
            >
              Products <ChevronDown className="w-3 h-3" />
            </button>
            {productsDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border p-2 animate-fade-in-up">
                <button onClick={() => handleProductClick("all")} className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors">All Products</button>
                <button onClick={() => handleProductClick("portable")} className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors">Portable Chargers</button>
                <button onClick={() => handleProductClick("onboard")} className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors">On-Board Chargers</button>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              handleNavClick("home");
              setTimeout(() => document.getElementById("corporate")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
            className="nav-link"
          >
            Company
          </button>

          <button
            onClick={() => handleNavClick("engineering")}
            className={`nav-link ${currentView === "engineering" ? "active text-primary" : ""}`}
          >
            Design Calculation
          </button>

          <Button variant="cta" size="sm" onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Sales
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in-right">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button onClick={() => handleNavClick("home")} className="text-left py-2 font-medium text-foreground">Home</button>
            <button onClick={() => handleProductClick("all")} className="text-left py-2 font-medium text-foreground">All Products</button>
            <button onClick={() => handleProductClick("portable")} className="text-left py-2 pl-4 text-muted-foreground">Portable Chargers</button>
            <button onClick={() => handleProductClick("onboard")} className="text-left py-2 pl-4 text-muted-foreground">On-Board Chargers</button>
            <button onClick={() => { handleNavClick("home"); setTimeout(() => document.getElementById("corporate")?.scrollIntoView({ behavior: "smooth" }), 100); }} className="text-left py-2 font-medium text-foreground">Company</button>
            <button onClick={() => handleNavClick("engineering")} className="text-left py-2 font-medium text-foreground">Design Calculation</button>
            <Button variant="cta" size="sm" className="mt-2 w-full" onClick={() => { setMobileOpen(false); document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" }); }}>
              Contact Sales
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
