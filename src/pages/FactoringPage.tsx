import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, CheckCircle, ArrowRight, Clock, Shield, TrendingUp, DollarSign, Calculator, Users } from "lucide-react";

const FactoringPage = () => {
  const features = [
    "Same-Day Funding Available",
    "Non-Recourse Factoring",
    "Credit Protection Services",
    "Online Account Management",
    "Fuel Card Programs",
    "Back Office Support"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Cash Flow",
      description: "Get paid within 24 hours instead of waiting 30-90 days for payment"
    },
    {
      icon: Shield,
      title: "Credit Protection",
      description: "We handle credit checks and protect you from bad debt"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Use improved cash flow to take on more loads and expand operations"
    }
  ];

  const rates = [
    {
      volume: "Under $25K/month",
      rate: "3.5% - 4.5%",
      features: ["Basic factoring", "Online portal", "Customer service"]
    },
    {
      volume: "$25K - $100K/month",
      rate: "2.5% - 3.5%",
      features: ["Priority processing", "Fuel cards", "Credit protection"]
    },
    {
      volume: "Over $100K/month",
      rate: "1.5% - 2.5%",
      features: ["Dedicated support", "Custom solutions", "Volume discounts"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <CreditCard className="w-4 h-4 mr-2" />
              Freight Factoring Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Factoring</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Get paid faster with our freight factoring services. Turn your invoices into 
              immediate cash flow and focus on growing your trucking business.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              How Freight Factoring Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="card-gradient border-border/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <CardTitle>Submit Invoice</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Upload your freight invoices through our secure online portal
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <CardTitle>Get Funded</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive 85-95% of your invoice value within 24 hours
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <CardTitle>We Collect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We handle collections and send you the remaining balance minus our fee
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">Service Features</h3>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-start space-x-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Competitive Factoring Rates
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {rates.map((rate, index) => (
                <Card 
                  key={rate.volume}
                  className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{rate.volume}</CardTitle>
                    <div className="text-3xl font-bold gradient-text">{rate.rate}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {rate.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold gradient-text mb-2">24hr</div>
                <div className="text-muted-foreground">Funding Time</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-muted-foreground">Advance Rate</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-muted-foreground">Collection Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center card-gradient border border-border/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Improve Your Cash Flow?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop waiting 30-90 days for payment. Get the cash you need to grow your 
              trucking business with our reliable factoring services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FactoringPage;