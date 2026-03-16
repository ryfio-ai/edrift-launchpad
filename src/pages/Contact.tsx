import { useEffect, useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="hero-bg py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-2xl">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Let's Power Your <span className="gradient-text">EV Platform</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 mt-4">
              Reach out to our engineering team for product inquiries, OEM partnerships, or technical support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <a href="mailto:info@edriftelectric.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">info@edriftelectric.com</p>
                    </div>
                  </a>

                  <a href="tel:+919790274709" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">+91 97902 74709</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Address</p>
                      <p className="text-sm font-medium text-foreground">Dr A.P.J Abdul Kalam Block,<br />IIT Palakkad, 678623</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/sankar-edriftelectric"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">LinkedIn</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Connect with us</p>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="glass-card p-8 lg:p-10 rounded-2xl">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name *</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email *</label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Company</label>
                        <input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Phone</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="product">Product Inquiry</option>
                        <option value="oem">OEM Partnership</option>
                        <option value="technical">Technical Support</option>
                        <option value="quote">Request a Quote</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto group">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
