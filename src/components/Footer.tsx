import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edrift-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA strip */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold">Ready to power your EV platform?</h3>
            <p className="text-secondary-foreground/50 text-sm mt-1">Get in touch with our team to discuss your requirements.</p>
          </div>
          <Button variant="cta" size="lg" className="shrink-0 group" asChild>
            <Link to="/contact">
              Get Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
              <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="block hover:text-primary transition-colors">Products</Link>
              <Link to="/about" className="block hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors font-medium text-primary">Contact Us →</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground/80">Connect</h4>
            <div className="space-y-2.5 text-sm text-secondary-foreground/60">
              <a href="https://www.linkedin.com/in/sankar-edriftelectric" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/8">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/40">
          <p>© 2026 eDrift Electric Private Limited. All rights reserved.</p>
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
