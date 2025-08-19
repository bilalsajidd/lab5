import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, ArrowRight, Truck, Clock, Shield, TrendingUp } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: Truck,
      number: "500+",
      label: "Active Drivers",
      description: "Trucks dispatched daily"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock service"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "In the industry"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Driver retention rate"
    }
  ];

  const team = [
    {
      name: "Ali Hassan",
      role: "Founder & CEO",
      description: "15+ years in logistics and transportation management"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Dispatch",
      description: "Expert in route optimization and load management"
    },
    {
      name: "Mike Rodriguez",
      role: "Operations Manager",
      description: "Specialized in carrier relations and operational efficiency"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent service you can depend on, 24/7/365"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We're your business partners, invested in your success"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality service"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">ALI LOGISTICS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We're more than just a dispatch company - we're your trusted partner in building 
              a successful trucking business. Founded by industry veterans who understand the 
              challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.label}
                    className="card-gradient border-border/20 text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                      <CardTitle className="text-lg">{stat.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm">
                        {stat.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ALI Logistics was founded in 2019 with a simple mission: to help independent 
                    truck drivers and small fleet owners succeed in an increasingly competitive industry.
                  </p>
                  <p>
                    Our founder, Ali Hassan, started as an owner-operator himself and experienced 
                    firsthand the challenges of finding profitable loads, managing paperwork, and 
                    dealing with brokers who didn't understand the driver's perspective.
                  </p>
                  <p>
                    Today, we've grown into a trusted dispatch service that combines industry expertise 
                    with cutting-edge technology to deliver results that matter - more miles, 
                    better rates, and the support you need to build a thriving business.
                  </p>
                </div>
              </div>
              
              <div className="card-gradient border border-border/20 rounded-2xl p-8 animate-slide-up">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To empower independent truck drivers and fleet owners with the tools, 
                  support, and opportunities they need to build successful, sustainable businesses.
                </p>
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted name in truck dispatch services, known for our 
                  reliability, transparency, and unwavering commitment to our drivers' success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Meet Our Team
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={member.name}
                  className="card-gradient border-border/20 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">
              Why Drivers Choose ALI Logistics
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Industry Experience</h3>
                <p className="text-muted-foreground">
                  Our team has decades of combined experience in trucking, logistics, and dispatch operations.
                </p>
                
                <h3 className="text-xl font-semibold">Technology-Driven</h3>
                <p className="text-muted-foreground">
                  We use the latest load boards and routing software to find you the best paying loads.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Service</h3>
                <p className="text-muted-foreground">
                  You're not just a number - we know your preferences, your routes, and your goals.
                </p>
                
                <h3 className="text-xl font-semibold">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees, no surprises. You know exactly what you're paying for our services.
                </p>
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
              Ready to Join Our Family?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the ALI Logistics difference. Join hundreds of successful drivers 
              who trust us with their dispatch needs and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
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

export default AboutPage;