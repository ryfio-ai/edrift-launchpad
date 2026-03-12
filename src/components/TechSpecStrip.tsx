import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Zap, Thermometer, Droplets, Maximize2, Gauge, Battery, ShieldCheck, FileDown, PlugZap } from "lucide-react";
import { Button } from "@/components/ui/button";

const specs = [
  { icon: Battery, label: "Output Voltage", value: "48–400 V", detail: "48, 60, 72, 84, 96, 240, 400 V" },
  { icon: Zap, label: "Output Power", value: "2.2–6.6 kW", detail: "3.3 kW common rating" },
  { icon: Gauge, label: "Max Current", value: "60 A", detail: "Continuous rated" },
  { icon: PlugZap, label: "Input", value: "180–275 VAC", detail: "30 A max, PF 0.98" },
  { icon: Droplets, label: "IP Rating", value: "IP67", detail: "Dust & waterproof" },
  { icon: Thermometer, label: "Temperature", value: "–40 to +55 °C", detail: "Extended range" },
  { icon: ShieldCheck, label: "Protection", value: "OVP, OCP, OTP", detail: "Full fault coverage" },
  { icon: Maximize2, label: "Dimensions", value: "280×160×140 mm", detail: "Compact form factor" },
];

const TechSpecStrip = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(210 100% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 80%) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Specifications</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground">Technical Overview</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {specs.map((spec, i) => (
            <AnimatedSection key={i}>
              <div className="group flex flex-col gap-2 p-5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/8 hover:border-primary/30 hover:bg-secondary-foreground/8 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <spec.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <p className="text-xs text-secondary-foreground/50 font-medium uppercase tracking-wider">{spec.label}</p>
                </div>
                <p className="text-lg font-bold text-secondary-foreground font-display">{spec.value}</p>
                <p className="text-xs text-secondary-foreground/40">{spec.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Datasheet CTA */}
        <AnimatedSection className="text-center mt-12">
          <Button variant="heroOutline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5">
            <FileDown className="w-4 h-4 mr-2" />
            Download Full Datasheet (PDF)
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechSpecStrip;
