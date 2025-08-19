import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Users,
  Crown
} from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "5%",
      description: "Perfect for individual owner-operators getting started",
      icon: Phone,
      features: [
        "Load finding and booking",
        "Rate negotiation",
        "Basic paperwork handling",
        "Email support",
        "Weekly settlements",
        "Route suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "7%",
      description: "Most popular choice for experienced drivers",
      icon: Star,
      features: [
        "Everything in Basic",
        "24/7 phone support",
        "Dedicated dispatcher",
        "Fuel optimization",
        "Permit assistance",
        "Load tracking",
        "Factoring coordination",
        "Maintenance scheduling"
      ],
      popular: true
    },
    {
      name: "Fleet",
      price: "Custom",
      description: "Comprehensive solution for fleet owners",
      icon: Crown,
      features: [
        "Everything in Professional",
        "Multi-truck management",
        "Fleet analytics dashboard",
        "Driver performance tracking",
        "Custom reporting",
        "Dedicated account manager",
        "Volume discounts",
        "Priority support"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    "Factoring Services - Competitive rates",
    "Fuel Card Programs - Save on every gallon",
    "Permit Services - Fast processing",
    "Insurance Assistance - Best rates",
    "Equipment Financing - Flexible terms",
    "Compliance Support - Stay legal"
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No hidden fees, no setup costs. You only pay when you get paid. 
            Choose the plan that fits your operation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`relative card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up ${
                  plan.popular ? 'ring-2 ring-primary/50 glow-effect' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'bg-gradient-primary glow-effect' : 'bg-secondary'
                  }`}>
                    <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-muted-foreground"> per load</span>}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90 glow-effect' 
                        : 'border-primary/30 text-primary hover:bg-primary/10'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="card-gradient border border-border/20 rounded-2xl p-8 mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Additional Services Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            Ready to Maximize Your Profits?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join ALI Logistics today and start earning more with less hassle. 
            No contracts, no hidden fees – just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
            >
              Start Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Call (234) 567-8900
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;