import { Activity, BarChart3, Shield } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Activity,
    title: "Industry-Leading Efficiency",
    description: "Up to 97% efficiency powered by advanced LLC resonant topology with SiC MOSFET architecture, minimizing heat loss and maximizing power delivery.",
  },
  {
    icon: BarChart3,
    title: "Aggressive Cost Structuring",
    description: "Optimized manufacturing processes and intelligent BOM engineering deliver enterprise-grade performance at competitive price points.",
  },
  {
    icon: Shield,
    title: "Automotive Standards",
    description: "IP67 rated, vibration resistant, and operational across extreme temperatures (–40°C to +55°C). Built for the toughest conditions.",
  },
];

const CorporateSection = () => {
  return (
    <section id="corporate" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Why eDrift</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Engineering Excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Purpose-built EV charger solutions backed by deep power electronics expertise and automotive-grade quality standards.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={i} className="glass-card hover-lift p-8 rounded-2xl text-center" >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <cap.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{cap.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
