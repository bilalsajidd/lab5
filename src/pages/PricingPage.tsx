import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, Star, ArrowRight, DollarSign } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic Dispatch",
      price: "$250",
      period: "/week",
      description: "Perfect for single truck operators getting started",
      features: [
        "Load finding & booking",
        "Route planning",
        "Basic support (9-5)",
        "Weekly settlements",
        "Load tracking",
        "Basic reporting"
      ],
      notIncluded: [
        "24/7 support",
        "Factoring services",
        "Fuel cards",
        "Priority loads"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$350",
      period: "/week",
      description: "Most popular choice for growing operations",
      features: [
        "Everything in Basic",
        "24/7 dispatch support",
        "Priority load access",
        "Dedicated dispatcher",
        "Advanced reporting",
        "Fuel card programs",
        "Permit assistance"
      ],
      notIncluded: [
        "Factoring included",
        "Fleet management tools"
      ],
      popular: true
    },
    {
      name: "Fleet Management",
      price: "$500",
      period: "/week",
      description: "Complete solution for fleet owners",
      features: [
        "Everything in Professional",
        "Multi-truck management",
        "Driver performance tracking",
        "Maintenance scheduling",
        "Compliance monitoring",
        "Custom reporting",
        "Fleet optimization tools",
        "Dedicated account manager"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const addOns = [
    { name: "Freight Factoring", price: "2.5% - 4.5% of invoice", description: "Fast funding for your invoices" },
    { name: "Fuel Cards", price: "$25/month per card", description: "Discounted fuel at thousands of locations" },
    { name: "ELD Service", price: "$35/month per truck", description: "FMCSA compliant electronic logging" },
    { name: "Insurance Services", price: "Custom quote", description: "Competitive trucking insurance rates" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Simple</span> Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Choose the dispatch service that fits your operation. No hidden fees, 
              no long-term contracts. Scale up or down as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`card-gradient border transition-all duration-300 animate-slide-up relative ${
                    plan.popular 
                      ? 'border-primary/50 shadow-glow scale-105' 
                      : 'border-border/20 hover:border-primary/30'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center opacity-50">
                          <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-primary hover:opacity-90 glow-effect' 
                          : 'border-primary/30 text-primary hover:bg-primary/10'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Add-On Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {addOns.map((addon, index) => (
                <Card 
                  key={addon.name}
                  className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg mb-2">{addon.name}</CardTitle>
                        <CardDescription>{addon.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold gradient-text">
                          {addon.price}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="card-gradient border border-border/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Are there any setup fees?</h3>
                <p className="text-muted-foreground">No setup fees, no hidden costs. You only pay the weekly dispatch fee for your chosen plan.</p>
              </div>
              
              <div className="card-gradient border border-border/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time to match your business needs.</p>
              </div>
              
              <div className="card-gradient border border-border/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What's included in 24/7 support?</h3>
                <p className="text-muted-foreground">Round-the-clock dispatch support, emergency assistance, and dedicated communication channels with your dispatcher.</p>
              </div>
              
              <div className="card-gradient border border-border/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer factoring services?</h3>
                <p className="text-muted-foreground">Yes, we offer competitive factoring rates starting at 2.5% to help improve your cash flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center card-gradient border border-border/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your plan and start growing your trucking business today. 
              No long-term contracts, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;