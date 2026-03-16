import { AnimatedSection } from "@/hooks/useScrollAnimation";

const clients = [
  { name: "Microchip", url: "https://www.microchip.com" },
  { name: "Infineon", url: "https://www.infineon.com" },
  { name: "Onsemi", url: "https://www.onsemi.com" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-2">Technology Partners</p>
          <h3 className="font-display text-xl font-semibold text-foreground">Our Clients & Partners</h3>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clients.map((client, i) => (
            <AnimatedSection key={i}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-8 py-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 min-w-[180px]"
              >
                <span className="font-display text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
