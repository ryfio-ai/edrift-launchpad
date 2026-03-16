import { TrendingUp, Zap, Monitor, Award, Gauge, Grid3X3 } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: TrendingUp, value: "98%+", label: "Efficiency Rate" },
  { icon: Grid3X3, value: "7", label: "Voltage Options" },
  { icon: Monitor, value: "6.6kW", label: "Max Power Output" },
  { icon: Award, value: "CE", label: "Certified Products" },
  { icon: Gauge, value: "60A", label: "Maximum Current" },
  { icon: Zap, value: "100%", label: "Quality Tested" },
];

const StatsStrip = () => {
  return (
    <section className="py-16 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i}>
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
