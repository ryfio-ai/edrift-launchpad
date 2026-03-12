import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Calculator, Cpu, Layers } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Inductor Synthesis",
    description: "Compute core size, winding turns, and inductance values for LLC resonant inductors.",
    progress: 25,
  },
  {
    icon: Layers,
    title: "Capacitor Array Logic",
    description: "Size DC-link and output filter capacitors based on ripple current and voltage specs.",
    progress: 15,
  },
  {
    icon: Cpu,
    title: "Transformer Specifier",
    description: "Design high-frequency transformers with optimal core geometry and turn ratios.",
    progress: 10,
  },
];

const EngineeringView = () => {
  return (
    <section className="min-h-screen pt-20 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Engineering Portal</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Design Calculation Suite</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-6 rounded-2xl mb-12 max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our upcoming suite of engineering tools will help you compute inductor designs, capacitor sizing, and transformer specifications for EV charger power stages. Stay tuned!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card hover-lift p-8 rounded-2xl text-center group cursor-default">
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <tool.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <div className="h-2 rounded-full bg-primary/40 transition-all duration-500" style={{ width: `${tool.progress}%` }} />
                </div>
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

export default EngineeringView;
