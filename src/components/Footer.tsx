import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edrift-logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      {/* CTA strip */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold">Ready to power your EV platform?</h3>
            <p className="text-secondary-foreground/50 text-sm mt-1">Talk to our engineering team about your requirements.</p>
          </div>
          <Button variant="cta" size="lg" className="shrink-0 group">
            Contact Sales
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="eDrift" className="w-10 h-10" />
              <span className="font-display text-lg font-bold">
                e<span className="text-primary">Drift</span> Electric
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/50 leading-relaxed">
              Enterprise-grade portable and on-board EV chargers with industry-leading efficiency and rugged design.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground/80">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/60">
              <a href="mailto:info@edriftelectric.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@edriftelectric.com
              </a>
              <a href="tel:+919790274709" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +91 97902 74709
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Dr A.P.J Abdul Kalam Block, IIT Palakkad, 678623</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground/80">Quick Links</h4>
            <div className="space-y-2.5 text-sm text-secondary-foreground/60">
              <p className="hover:text-primary transition-colors cursor-pointer">Home</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Products</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Engineering Portal</p>
              <p className="hover:text-primary transition-colors cursor-pointer font-medium text-primary">Contact Sales →</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground/80">Connect</h4>
            <div className="space-y-2.5 text-sm text-secondary-foreground/60">
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <p className="hover:text-primary transition-colors cursor-pointer">Twitter</p>
              <p className="hover:text-primary transition-colors cursor-pointer">YouTube</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/8">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/40">
          <p>© 2026 eDrift Electric. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-secondary-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-secondary-foreground cursor-pointer transition-colors">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
