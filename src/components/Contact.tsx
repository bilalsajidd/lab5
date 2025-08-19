import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-8900",
      description: "24/7 Dispatch Support",
      link: "tel:+12345678900"
    },
    {
      icon: Mail,
      title: "Email",
      content: "dispatch@alilogistics.com",
      description: "Quick Response Guaranteed",
      link: "mailto:dispatch@alilogistics.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Los Angeles, CA",
      description: "Serving USA & Canada",
      link: null
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Available",
      description: "Never miss a load",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your journey with ALI Logistics? Contact us today for a free consultation 
            and see how we can boost your trucking business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Our dispatch team is available around the clock to support your trucking operations. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card 
                    key={info.title}
                    className="card-gradient border-border/20 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center pb-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-primary font-semibold mb-1">
                        {info.content}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {info.description}
                      </div>
                    </CardContent>
                  </Card>
                );

                return info.link ? (
                  <a key={info.title} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            {/* CTA Card */}
            <Card className="card-gradient border-border/20 p-6 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our dispatch team is standing by to help you find your next profitable load.
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    Call Now: (234) 567-8900
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-border/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">
                Request Free Consultation
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName"
                    placeholder="Enter your first name"
                    className="bg-background/50 border-border/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    placeholder="Enter your last name"
                    className="bg-background/50 border-border/30 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background/50 border-border/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  className="bg-background/50 border-border/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="truckType">Truck Type</Label>
                <Input 
                  id="truckType"
                  placeholder="e.g., Dry Van, Reefer, Flatbed"
                  className="bg-background/50 border-border/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your trucking operation and how we can help..."
                  rows={4}
                  className="bg-background/50 border-border/30 focus:border-primary resize-none"
                />
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity glow-effect group"
                size="lg"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our terms and privacy policy. 
                We'll never share your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;