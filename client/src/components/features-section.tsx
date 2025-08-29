import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-robot",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      title: "AI-Powered Generation",
      description: "Our advanced AI analyzes job descriptions and creates tailored content that highlights your most relevant skills and experiences."
    },
    {
      icon: "fas fa-check-circle",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "ATS-Friendly Format",
      description: "All templates are optimized for Applicant Tracking Systems, ensuring your resume gets past automated screening."
    },
    {
      icon: "fas fa-download",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
      title: "Instant Download",
      description: "Download your polished resume and cover letter in multiple formats including PDF, Word, and plain text."
    },
    {
      icon: "fas fa-palette",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Professional Templates",
      description: "Choose from dozens of professionally designed templates suitable for any industry and career level."
    },
    {
      icon: "fas fa-eye",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Real-Time Preview",
      description: "See your resume come to life in real-time as you input your information with our live preview feature."
    },
    {
      icon: "fas fa-shield-alt",
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      title: "Data Privacy",
      description: "Your personal information is secure and private. We never share your data and offer local storage options."
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ResumeAI Pro?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform helps you create professional resumes and cover letters 
            that get noticed by employers and pass ATS screening.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow" data-testid={`feature-${index}`}>
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`${feature.icon} ${feature.iconColor} text-xl`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
