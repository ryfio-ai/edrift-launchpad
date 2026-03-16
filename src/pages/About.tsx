import { useEffect } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Target, Eye, Linkedin, Cpu, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamPlaceholder from "@/assets/team-placeholder.png";

const team = [
  {
    name: "Sankar",
    role: "Founder & CEO",
    image: teamPlaceholder,
    linkedin: "https://www.linkedin.com/in/sankar-edriftelectric",
    bio: "Leading eDrift Electric's mission to develop next-generation EV charging technologies with deep expertise in power electronics.",
  },
];

const capabilities = [
  {
    icon: Zap,
    title: "Industry-Leading Efficiency",
    description: "Up to 98% efficiency powered by advanced LLC resonant topology with SiC MOSFET and GaN architecture, minimizing heat loss and maximizing power delivery.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Semiconductors",
    description: "Leveraging Silicon Carbide (SiC) and Gallium Nitride (GaN) technologies to develop highly efficient, compact, and reliable charging solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Automotive Standards",
    description: "IP67 rated, vibration resistant, and operational across extreme temperatures (–40°C to +55°C). Built for the toughest conditions.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero banner */}
      <section className="hero-bg py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Pioneering Advanced <span className="gradient-text">Power Electronics</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 mt-6 max-w-2xl leading-relaxed">
              eDrift Electric Private Limited is a technology-driven company pioneering advanced power electronics solutions for the electric mobility ecosystem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company description */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Engineering Excellence in EV Charging
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a strong focus on innovation and engineering excellence, our experienced research and development team is dedicated to designing next-generation EV charging technologies.
                </p>
                <p>
                  At eDrift Electric, we leverage cutting-edge semiconductor technologies such as Silicon Carbide (SiC) and Gallium Nitride (GaN) to develop highly efficient, compact, and reliable charging solutions.
                </p>
                <p>
                  Our goal is to push the boundaries of power conversion efficiency while delivering products that are practical, scalable, and user-focused.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-1 gap-6">
                {capabilities.map((cap, i) => (
                  <div key={i} className="glass-card hover-lift p-6 rounded-2xl flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <cap.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Purpose</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Mission & Vision</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="glass-card p-8 lg:p-10 rounded-2xl h-full hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To design and deliver reliable, efficient, and intelligent EV charging solutions that empower users, accelerate the adoption of electric mobility, and contribute to a cleaner and more sustainable energy future.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass-card p-8 lg:p-10 rounded-2xl h-full hover-lift">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To enable a sustainable and energy-efficient mobility ecosystem by developing innovative EV charging technologies that seamlessly integrate vehicles with other vehicles and external loads, empowering vehicles to intelligently consume, share, and utilize energy in everyday life.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Team</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Led by experienced engineers and researchers passionate about advancing electric mobility.
            </p>
          </AnimatedSection>

          <div className="flex justify-center">
            {team.map((member, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card hover-lift p-8 rounded-2xl text-center max-w-sm">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted overflow-hidden border-4 border-primary/10">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to collaborate?
            </h2>
            <p className="text-secondary-foreground/50 mb-8 max-w-lg mx-auto">
              Get in touch with our engineering team to discuss your EV charging requirements.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
