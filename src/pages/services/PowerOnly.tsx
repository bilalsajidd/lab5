import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, CheckCircle, ArrowRight, Clock, TrendingUp, Fuel } from "lucide-react";

const PowerOnly = () => {
  const navigate = useNavigate();
  const features = [
    "Trailer Provided by Shipper",
    "Quick Turnaround Times",
    "Reduced Deadhead Miles",
    "Flexible Operations",
    "Higher Efficiency Rates",
    "Drop & Hook Capability"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Faster loading with pre-loaded trailers and drop & hook operations"
    },
    {
      icon: TrendingUp,
      title: "Higher Efficiency",
      description: "Maximize revenue with reduced empty miles and wait times"
    },
    {
      icon: Fuel,
      title: "Lower Costs",
      description: "Reduce fuel costs with less deadhead and optimized routing"
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
              <Zap className="w-4 h-4 mr-2" />
              Power Only Dispatch
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Power Only</span> Dispatch Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Trailer provided by shipper, you provide the power unit. 
              Maximize efficiency with quick turnarounds and reduced deadhead miles.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
              onClick={() => navigate('/contact')}
            >
              Start Power Only Dispatch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Why Choose Power Only Dispatch?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Service Features</h3>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-gradient border border-border/20 rounded-2xl p-8">
                <Zap className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Power Only Benefits</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Equipment Investment:</span>
                    <span className="text-foreground">Tractor Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance Costs:</span>
                    <span className="text-foreground">Reduced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Turnaround Time:</span>
                    <span className="text-foreground">30-60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Efficiency Gain:</span>
                    <span className="text-foreground">15-25%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={benefit.title}
                    className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center card-gradient border border-border/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Start Power Only Dispatch?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Optimize your operations with power-only loads. Reduce costs, increase efficiency, 
              and maximize your earning potential with our specialized dispatch service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerOnly;