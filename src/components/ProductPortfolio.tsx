import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Zap, Battery, ArrowRight } from "lucide-react";
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
  { title: "DC/DC Converters", icon: Zap },
  { title: "Integrated Chargers", icon: Battery },
  { title: "Bidirectional Chargers", icon: Zap },
];

const ProductPortfolio = ({ onProductClick }: ProductPortfolioProps) => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Product Lineup</h2>
        </AnimatedSection>

        {/* Current products */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {currentProducts.map((product, i) => (
            <AnimatedSection key={i}>
              <button
                onClick={() => onProductClick(product.category)}
                className="glass-card hover-lift p-6 rounded-2xl w-full text-left group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-32 h-32 rounded-xl bg-muted flex items-center justify-center overflow-hidden shrink-0">
                    <img src={product.image} alt={product.title} className="w-28 h-28 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, j) => (
                        <span key={j} className="spec-chip text-xs">{spec}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
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
          <h3 className="font-display text-xl font-semibold text-foreground">Coming Soon</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6">
          {upcomingProducts.map((product, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card p-6 rounded-2xl text-center opacity-70">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{product.title}</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                  Upcoming
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
