import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import chargerHero from "@/assets/charger-hero.png";

interface HeroSectionProps {
  onViewProducts: () => void;
}

const HeroSection = ({ onViewProducts }: HeroSectionProps) => {
  return (
    <section className="hero-bg relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-streak" />
        <div className="absolute top-2/3 -left-20 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-streak" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 -left-20 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-streak" style={{ animationDelay: "5s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Copy */}
        <AnimatedSection className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-primary-foreground/80">Next-Gen EV Power Electronics</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            High-Efficiency EV Chargers.{" "}
            <span className="gradient-text">Optimized Cost.</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
            eDrift engineers enterprise-grade portable and on-board chargers for modern electric vehicles, combining rugged design with up to 97% efficiency.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="lg" onClick={onViewProducts}>
              View Products Catalog
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5"
              onClick={() => document.getElementById("corporate")?.scrollIntoView({ behavior: "smooth" })}
            >
              Corporate Overview
            </Button>
          </div>
        </AnimatedSection>

        {/* Right: Product image */}
        <AnimatedSection className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-110" />
            <img
              src={chargerHero}
              alt="eDrift EV Onboard Charger Module"
              className="relative z-10 w-full max-w-lg rounded-2xl animate-float"
            />
            {/* Active label */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground">Charging Active</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
