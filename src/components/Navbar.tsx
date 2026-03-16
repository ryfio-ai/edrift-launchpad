import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edrift-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith("/products");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-card/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="eDrift Electric" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold text-foreground">
            e<span className="text-primary">Drift</span> Electric
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`nav-link ${isActive("/") ? "active text-primary" : ""}`}>
            Home
          </Link>

          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setProductsDropdown(true)} onMouseLeave={() => setProductsDropdown(false)}>
            <Link
              to="/products"
              className={`nav-link flex items-center gap-1 ${isProductsActive ? "active text-primary" : ""}`}
            >
              Products <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsDropdown ? "rotate-180" : ""}`} />
            </Link>
            {productsDropdown && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-card/95 backdrop-blur-xl rounded-xl shadow-xl border border-border/50 p-1.5 animate-fade-in-up">
                <Link to="/products" className="block w-full text-left px-3 py-2.5 text-sm rounded-lg hover:bg-primary/5 hover:text-primary transition-colors font-medium">All Products</Link>
                <Link to="/products/portable" className="block w-full text-left px-3 py-2.5 text-sm rounded-lg hover:bg-primary/5 hover:text-primary transition-colors">Portable Chargers</Link>
                <Link to="/products/onboard" className="block w-full text-left px-3 py-2.5 text-sm rounded-lg hover:bg-primary/5 hover:text-primary transition-colors">On-Board Chargers</Link>
                <Link to="/products/dcdc" className="block w-full text-left px-3 py-2.5 text-sm rounded-lg hover:bg-primary/5 hover:text-primary transition-colors">DC-DC Converters</Link>
              </div>
            )}
          </div>

          <Link to="/about" className={`nav-link ${isActive("/about") ? "active text-primary" : ""}`}>
            About Us
          </Link>

          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active text-primary" : ""}`}>
            Contact
          </Link>

          <Button variant="cta" size="sm" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link to="/" className="text-left py-3 px-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors">Home</Link>
            <Link to="/products" className="text-left py-3 px-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors">All Products</Link>
            <Link to="/products/portable" className="text-left py-3 px-3 pl-6 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors">Portable Chargers</Link>
            <Link to="/products/onboard" className="text-left py-3 px-3 pl-6 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors">On-Board Chargers</Link>
            <Link to="/products/dcdc" className="text-left py-3 px-3 pl-6 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors">DC-DC Converters</Link>
            <Link to="/about" className="text-left py-3 px-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors">About Us</Link>
            <Link to="/contact" className="text-left py-3 px-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors">Contact</Link>
            <Button variant="cta" size="sm" className="mt-3 w-full" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
