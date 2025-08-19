import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Dispatch", href: "/services", hasSubmenu: true },
    { name: "Factoring", href: "/factoring" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const dispatchServices = [
    { name: "Box Truck", href: "/services/box-truck" },
    { name: "Dry Van", href: "/services/dry-van" },
    { name: "Reefer", href: "/services/reefer" },
    { name: "Power Only", href: "/services/power-only" },
    { name: "Hotshot", href: "/services/hotshot" },
    { name: "Flat Bed / Step Deck", href: "/services/flat-bed" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 card-gradient border-b border-border/20 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">
              ALI LOGISTICS
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
                {item.hasSubmenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 card-gradient border border-border/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {dispatchServices.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-8900</span>
              </a>
            </div>
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        )}>
          <div className="space-y-4 pt-4 border-t border-border/20">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.hasSubmenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {dispatchServices.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border/20">
              <Button 
                variant="default" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;