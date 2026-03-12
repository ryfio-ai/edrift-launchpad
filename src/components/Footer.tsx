import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/edrift-logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="eDrift" className="w-10 h-10" />
              <span className="font-display text-lg font-bold">eDrift Electric</span>
            </div>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
              Enterprise-grade portable and on-board EV chargers with industry-leading efficiency and rugged design.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> sankar.s@edriftelectric.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91-9790274709</div>
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> eDrift Electric, Tech Park, Chennai, India</div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p className="hover:text-primary transition-colors cursor-pointer">Home</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Products</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Engineering Portal</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Contact Sales</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p className="hover:text-primary transition-colors cursor-pointer">LinkedIn</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Twitter</p>
              <p className="hover:text-primary transition-colors cursor-pointer">YouTube</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/50">
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
