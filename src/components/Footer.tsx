import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  const dispatchServices = [
    "Box Truck Dispatch",
    "Dry Van Dispatch", 
    "Reefer Dispatch",
    "Power Only Dispatch",
    "Hotshot Dispatch",
    "Flatbed Dispatch"
  ];

  const quickLinks = [
    "About Us",
    "Pricing",
    "Factoring Services",
    "Contact",
    "Blog",
    "Careers"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Compliance",
    "Insurance"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-muted/20 border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold gradient-text">
                ALI LOGISTICS
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in professional truck dispatch services. 
              Maximizing profits for drivers and fleet owners across North America.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">dispatch@alilogistics.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Dispatch Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Dispatch Services
            </h3>
            <ul className="space-y-3">
              {dispatchServices.map((service) => (
                <li key={service}>
                  <a 
                    href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Stay Connected
            </h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on freight rates, industry news, and exclusive offers.
            </p>
            <div className="space-y-3">
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-background border border-border/30 rounded-md text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 ALI Logistics. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border/10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-primary" />
              <span>DOT Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">★</span>
              <span>5-Star Rated Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">24</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;