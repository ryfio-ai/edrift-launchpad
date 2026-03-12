import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Zap, Battery, ArrowRight, Repeat } from "lucide-react";
import portableImg from "@/assets/portable-charger.png";
import onboardImg from "@/assets/onboard-charger.png";

interface ProductPortfolioProps {
  onProductClick: (category: string) => void;
}

const currentProducts = [
  {
    title: "Portable Chargers",
    category: "portable",
    description: "3.3 kW single-phase portable EV chargers supporting battery voltages from 48 V to 400 V.",
    image: portableImg,
    specs: ["3.3 kW", "48–400 V", "≥97% Eff."],
  },
  {
    title: "On-Board Chargers (OBC)",
    category: "onboard",
    description: "Compact on-board chargers with IP67 protection, optimized for integration into EV platforms.",
    image: onboardImg,
    specs: ["3.3 kW", "48–400 V", "IP67"],
  },
];

const upcomingProducts = [
  { title: "DC/DC Converters", icon: Zap, description: "High-efficiency isolated DC/DC power conversion" },
  { title: "Integrated Chargers", icon: Battery, description: "Combined OBC + DC/DC in a single module" },
  { title: "Bidirectional Chargers", icon: Repeat, description: "V2G and V2H capable power systems" },
];

const ProductPortfolio = ({ onProductClick }: ProductPortfolioProps) => {
  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Product Lineup</h2>
        </AnimatedSection>

        {/* Current products */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {currentProducts.map((product, i) => (
            <AnimatedSection key={i}>
              <button
                onClick={() => onProductClick(product.category)}
                className="glass-card hover-lift p-6 lg:p-8 rounded-2xl w-full text-left group cursor-pointer transition-all duration-300 hover:border-primary/20 h-full"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-28 h-28 rounded-xl bg-secondary/5 border border-border/50 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-primary/20 transition-colors">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec, j) => (
                        <span key={j} className="spec-chip text-xs px-3 py-1.5">{spec}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                      View Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* Upcoming */}
        <AnimatedSection className="text-center mb-8">
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-2">In Development</p>
          <h3 className="font-display text-xl font-semibold text-foreground">Coming Soon</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6">
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
