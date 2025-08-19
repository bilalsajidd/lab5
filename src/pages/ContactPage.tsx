import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901"],
      description: "Call us 24/7 for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dispatch@alilogistics.com", "support@alilogistics.com"],
      description: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Logistics Ave", "Transport City, TC 12345"],
      description: "Visit us during business hours"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sun: 24/7", "Dispatch Support"],
      description: "We're always here when you need us"
    }
  ];

  const faqItems = [
    {
      question: "How quickly can I get started?",
      answer: "We can have you up and running within 24-48 hours after completing our simple onboarding process."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need your MC authority, insurance certificates, and truck registration. We'll guide you through the process."
    },
    {
      question: "Do you work with new authority?",
      answer: "Yes, we work with both new and established carriers. We'll help you build your business from day one."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide dispatch services across all 48 contiguous states and Canada, with loads available nationwide."
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Contact</span> ALI Logistics
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to start your dispatch service? Have questions about our plans? 
              We're here to help you succeed. Contact us today for personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 mb-3">
                        {info.details.map((detail) => (
                          <div key={detail} className="font-medium">{detail}</div>
                        ))}
                      </div>
                      <CardDescription className="text-sm">
                        {info.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <Card className="card-gradient border-border/20">
                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Your first name" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Your last name" className="mt-2" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-2" />
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" placeholder="Your company name" className="mt-2" />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <select className="w-full mt-2 px-3 py-2 bg-background border border-border rounded-md">
                          <option>Select a service</option>
                          <option>Dispatch Service</option>
                          <option>Factoring</option>
                          <option>Box Truck</option>
                          <option>Dry Van</option>
                          <option>Reefer</option>
                          <option>Power Only</option>
                          <option>Hotshot</option>
                          <option>Flat Bed</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your trucking business and how we can help..."
                          className="mt-2 min-h-[120px]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity glow-effect"
                      >
                        Send Message
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ */}
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-8 gradient-text">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <Card 
                      key={faq.question}
                      className="card-gradient border-border/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Contact */}
                <Card className="card-gradient border-border/20 mt-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our dispatch team is available 24/7 for urgent matters.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait - start growing your trucking business today. Join hundreds of 
              successful drivers who trust ALI Logistics for their dispatch needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-effect px-8"
              >
                Start Dispatch Service
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;