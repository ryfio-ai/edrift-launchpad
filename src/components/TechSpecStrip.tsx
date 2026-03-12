import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Zap, Thermometer, Droplets, Weight, Maximize2, Gauge, Battery, ShieldCheck } from "lucide-react";

const specs = [
  { icon: Battery, label: "Output Voltage", value: "48–400 V" },
  { icon: Zap, label: "Output Power", value: "2.2–6.6 kW" },
  { icon: Gauge, label: "Max Current", value: "60 A" },
  { icon: Zap, label: "Input", value: "180–275 VAC, 30 A" },
  { icon: Droplets, label: "IP Rating", value: "IP67" },
  { icon: Thermometer, label: "Temperature", value: "–40 to +55 °C" },
  { icon: ShieldCheck, label: "Protection", value: "OVP, OCP, OTP" },
  { icon: Maximize2, label: "Dimensions", value: "280×160×140 mm" },
];

const TechSpecStrip = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground">Technical Specifications</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec, i) => (
            <AnimatedSection key={i}>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <spec.icon className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-secondary-foreground/60">{spec.label}</p>
                  <p className="text-sm font-semibold text-secondary-foreground">{spec.value}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecStrip;
