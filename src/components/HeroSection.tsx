import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import chargerHero from "@/assets/charger-hero.png";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-bg relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-streak" />
        <div className="absolute top-2/3 -left-20 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-streak" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 -left-20 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-streak" style={{ animationDelay: "7s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <AnimatedSection className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary-foreground/80">Next-Gen EV Power Electronics</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
            Redefining{" "}
            <br className="hidden md:block" />
            EV Charging.{" "}
            <span className="gradient-text">AI Flexible & Limitless.</span>
          </h1>
          <p className="text-lg text-primary-foreground/60 max-w-xl leading-relaxed">
            Premium onboard and portable EV chargers with industry-leading ≥98% efficiency. Available across 7 voltage options from 48V to 400V.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/products">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-primary-foreground/40 text-xs font-medium tracking-wide uppercase">
            <span>IP67 Rated</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>SiC & GaN</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>98% Efficiency</span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-primary/10 blur-[60px]" />
            <div className="power-border" />
            <div className="relative z-10 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-primary-foreground/10 p-6 animate-pulse-glow">
              <img
                src={chargerHero}
                alt="eDrift EV Onboard Charger Module — enterprise-grade charger with SiC MOSFET topology"
                className="w-full max-w-md rounded-xl animate-float"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-md border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-accent">Charging Active</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
