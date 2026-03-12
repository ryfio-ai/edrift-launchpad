import { Activity, BarChart3, Shield } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Activity,
    title: "Industry-Leading Efficiency",
    description: "Up to 97% efficiency powered by advanced LLC resonant topology with SiC MOSFET architecture, minimizing heat loss and maximizing power delivery.",
    hasBar: true,
    barValue: 97,
    barLabel: "97% vs 85% industry avg",
  },
  {
    icon: BarChart3,
    title: "Aggressive Cost Structuring",
    description: "Optimized manufacturing processes and intelligent BOM engineering deliver enterprise-grade performance at competitive price points.",
    hasBar: false,
  },
  {
    icon: Shield,
    title: "Automotive Standards",
    description: "IP67 rated, vibration resistant, and operational across extreme temperatures (–40°C to +55°C). Built for the toughest conditions.",
    hasBar: false,
  },
];

const CorporateSection = () => {
  return (
    <section id="corporate" className="py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Why eDrift</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Engineering Excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Purpose-built EV charger solutions backed by deep power electronics expertise and automotive-grade quality standards.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card hover-lift p-8 rounded-2xl text-center group h-full transition-all duration-300 hover:border-primary/20">
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cap.description}</p>
                {cap.hasBar && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>Efficiency</span>
                      <span className="text-primary font-semibold">{cap.barLabel}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent efficiency-bar"
                        style={{ width: `${cap.barValue}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
