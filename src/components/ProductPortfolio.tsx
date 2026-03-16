import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Zap, Battery, ArrowRight, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import portableImg from "@/assets/portable-charger.png";
import onboardImg from "@/assets/onboard-charger.png";
import dcdcImg from "@/assets/dcdc-converter.png";

const currentProducts = [
  {
    title: "On-Board Chargers (OBC)",
    category: "onboard",
    description: "High-performance on-board charging solutions from 3.3kW to 6.6kW with IP67 protection. Available across all voltage ranges with 98% efficiency.",
    image: onboardImg,
    specs: ["3.3–6.6 kW", "48–520 V", "98% Eff.", "CE Certified"],
  },
  {
    title: "Portable Chargers",
    category: "portable",
    description: "3.3 kW portable charging solution. Compact, lightweight, and perfect for on-the-go charging across all voltage configurations.",
    image: portableImg,
    specs: ["3.3 kW", "48–400 V", "≥98% Eff.", "PF 0.98"],
  },
  {
    title: "DC-DC Converters",
    category: "dcdc",
    description: "Isolated DC-DC converters from 1kW to 1.5kW. High-efficiency power conversion with CAN communication and natural/forced air cooling.",
    image: dcdcImg,
    specs: ["1–1.5 kW", "44–450 V Input", "98% Eff.", "CAN Comm"],
  },
];

const upcomingProducts = [
  { title: "Integrated Chargers", icon: Battery, description: "Combined OBC + DC/DC in a single module" },
  { title: "Bidirectional Chargers", icon: Repeat, description: "V2G and V2H capable power systems" },
];

const ProductPortfolio = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Product Range</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive EV Charging Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Designed for efficiency, reliability, and versatility across all voltage ranges.
          </p>
        </AnimatedSection>

        {/* Current products */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {currentProducts.map((product, i) => (
            <AnimatedSection key={i}>
              <Link
                to={`/products/${product.category}`}
                className="glass-card hover-lift rounded-2xl overflow-hidden block group h-full transition-all duration-300 hover:border-primary/20"
              >
                <div className="h-48 bg-muted/50 flex items-center justify-center p-6 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-36 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold text-primary-foreground bg-accent px-2.5 py-1 rounded-full">
                    Available Now
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec, j) => (
                      <span key={j} className="spec-chip text-xs px-3 py-1.5">{spec}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300 pt-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Upcoming */}
        <AnimatedSection className="text-center mb-8">
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-2">In Development</p>
          <h3 className="font-display text-xl font-semibold text-foreground">Coming Soon</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {upcomingProducts.map((product, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card p-6 lg:p-8 rounded-2xl text-center group hover:border-primary/10 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <product.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{product.title}</h4>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                <span className="shimmer-badge inline-flex items-center px-3 py-1 rounded-full text-accent text-xs font-bold border border-accent/20">
                  Coming Soon
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
