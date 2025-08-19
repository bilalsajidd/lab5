import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Professional truck driving on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-glow">
            <Truck className="w-4 h-4 mr-2" />
            Professional Trucking Dispatch
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-slide-up">
            <span className="gradient-text">ALI LOGISTICS</span>
            <br />
            <span className="text-foreground">Truck Dispatch Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We provide high-quality freight dispatch services for interstate carriers and fleet owners in the USA and Canada
          </p>

          {/* Service Types */}
          <div className="flex flex-wrap justify-center gap-3 text-sm animate-slide-up">
            {["Dry Vans", "Reefers", "Flat Beds", "Hotshots", "Power Only", "Box Trucks"].map((service) => (
              <span 
                key={service}
                className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-effect group px-8 py-6 text-lg"
              onClick={() => navigate('/contact')}
            >
              Start Trucking Dispatch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => navigate('/contact')}
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">24/7 Dispatch Support</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Truck className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">All Vehicle Types</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;