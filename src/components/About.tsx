import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  MapPin, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Drivers", value: "500+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: MapPin, label: "States Covered", value: "48" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" }
  ];

  const benefits = [
    "24/7 dispatch support and load coordination",
    "Competitive rate negotiation on your behalf",
    "Complete paperwork and documentation handling",
    "Route optimization for maximum efficiency",
    "Fuel card programs and expense management",
    "Regulatory compliance assistance",
    "Real-time load tracking and updates",
    "Dedicated account manager support"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">ALI Logistics</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in the trucking industry, ALI Logistics has established itself as a trusted partner for drivers and fleet owners across North America.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the challenges of finding profitable loads, managing paperwork, and dealing with brokers. That's why we've built a comprehensive dispatch service that handles everything, allowing you to focus on what you do best – driving safely and efficiently.
              </p>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                What We Handle For You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect group"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label}
                  className="card-gradient border-border/20 text-center p-6 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="card-gradient border border-border/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Our Mission
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower truck drivers and fleet owners with reliable, efficient dispatch services that maximize profits while minimizing hassles. We're not just a dispatch company – we're your business partners committed to your success on the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;