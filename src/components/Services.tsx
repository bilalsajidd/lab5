import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Snowflake, 
  Package, 
  Zap, 
  Target, 
  Layers,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Box Truck",
      description: "Perfect for local and regional deliveries with maximum flexibility",
      features: ["26ft Box Trucks", "Local/Regional", "Flexible Scheduling", "High Demand Routes"]
    },
    {
      icon: Truck,
      title: "Dry Van",
      description: "Standard freight transport for non-perishable goods nationwide",
      features: ["53ft Trailers", "Nationwide Coverage", "Consistent Loads", "Reliable Routes"]
    },
    {
      icon: Snowflake,
      title: "Reefer",
      description: "Temperature-controlled transport for perishable goods",
      features: ["Climate Control", "Fresh Produce", "Pharmaceutical", "Premium Rates"]
    },
    {
      icon: Zap,
      title: "Power Only",
      description: "Trailer provided by shipper, you provide the power unit",
      features: ["Quick Turnaround", "Less Deadhead", "Flexible Operations", "Higher Efficiency"]
    },
    {
      icon: Target,
      title: "Hotshot",
      description: "Expedited delivery for time-sensitive shipments",
      features: ["Urgent Delivery", "Smaller Loads", "Premium Pricing", "Quick Dispatch"]
    },
    {
      icon: Layers,
      title: "Flat Bed / Step Deck",
      description: "Specialized transport for oversized and heavy equipment",
      features: ["Heavy Equipment", "Construction Materials", "Oversized Loads", "Specialized Hauling"]
    }
  ];

  return (
    <section id="dispatch" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Dispatch Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive trucking dispatch solutions for all vehicle types. 
            We handle the logistics while you focus on driving.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center card-gradient border border-border/20 rounded-2xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            Ready to Start Dispatching?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied drivers who trust ALI Logistics for their dispatch needs. 
            Get started today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;