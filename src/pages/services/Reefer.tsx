import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, CheckCircle, ArrowRight, Thermometer, DollarSign, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reefer = () => {
  const navigate = useNavigate();
  const features = [
    "Temperature-Controlled Trailers",
    "Fresh Produce Transport",
    "Pharmaceutical Shipments",
    "Frozen Food Distribution",
    "Premium Rate Loads",
    "Specialized Equipment"
  ];

  const benefits = [
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Precise temperature management for sensitive cargo"
    },
    {
      icon: DollarSign,
      title: "Premium Rates",
      description: "Higher paying loads due to specialized equipment requirements"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Maintaining product integrity from pickup to delivery"
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
              <Snowflake className="w-4 h-4 mr-2" />
              Reefer Dispatch
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Reefer</span> Dispatch Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Specialized temperature-controlled transport for perishable goods. 
              Premium rates and consistent demand for fresh produce and pharmaceuticals.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
              onClick={() => navigate('/contact')}
            >
              Start Reefer Dispatch
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
              Why Choose Reefer Dispatch?
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
                <Snowflake className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Reefer Specifications</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Temperature Range:</span>
                    <span className="text-foreground">-20°F to +70°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cargo Volume:</span>
                    <span className="text-foreground">3,600 cu ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Weight:</span>
                    <span className="text-foreground">80,000 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel Efficiency:</span>
                    <span className="text-foreground">6-7 MPG</span>
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
              Ready to Start Reefer Dispatch?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the premium segment of freight transportation. Get access to high-paying 
              temperature-controlled loads with dedicated support for your reefer operation.
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

export default Reefer;