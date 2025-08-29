import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FeaturesSection } from "@/components/features-section";
import { ResumeGenerator } from "@/components/resume-generator";
import { CoverLetterGenerator } from "@/components/cover-letter-generator";
import { TemplatesSection } from "@/components/templates-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const scrollToApp = () => {
    const element = document.getElementById('app');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Ad Placeholder - Header Banner */}
      <div className="mx-auto max-w-7xl my-8 px-4">
        <AdPlaceholder size="banner" />
      </div>
      
      <FeaturesSection />
      
      {/* Main Application with Sidebar Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Ad Placement */}
          <div className="lg:col-span-2 order-last lg:order-first">
            <div className="sticky top-24">
              <AdPlaceholder size="sidebar" />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-10">
            <ResumeGenerator />
            
            {/* Ad Placeholder - Between Content */}
            <div className="my-8">
              <AdPlaceholder size="content" />
            </div>
          </div>
        </div>
      </div>
      
      <CoverLetterGenerator />
      <TemplatesSection />
      
      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Creating Your Perfect Resume Today</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed interviews with our AI-powered resume generator.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-blue-100">Resumes Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Interview Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.9★</div>
                <div className="text-blue-100">User Rating</div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={scrollToApp} 
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            data-testid="cta-create-resume"
          >
            <i className="fas fa-rocket mr-2" />
            Create My Resume Now - It's Free!
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
