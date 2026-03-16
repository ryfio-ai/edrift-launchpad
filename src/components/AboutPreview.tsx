import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cpu, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Zap, title: "98% Efficiency", desc: "Advanced LLC resonant topology with SiC & GaN semiconductors" },
  { icon: Cpu, title: "SiC & GaN Technology", desc: "Cutting-edge power semiconductors for compact, efficient designs" },
  { icon: ShieldCheck, title: "IP67 Rated", desc: "Built for extreme environments, –40°C to +55°C operating range" },
];

const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">About eDrift Electric</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pioneering Advanced Power Electronics for EV Mobility
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              eDrift Electric Private Limited is a technology-driven company leveraging cutting-edge semiconductor technologies such as Silicon Carbide (SiC) and Gallium Nitride (GaN) to develop highly efficient, compact, and reliable EV charging solutions.
            </p>
            <Button variant="outline" size="lg" className="group rounded-xl" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>

          <div className="grid gap-5">
            {highlights.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card hover-lift p-6 rounded-2xl flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
