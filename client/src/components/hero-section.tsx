import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToApp = () => {
    const element = document.getElementById('app');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Create Professional Resumes with AI in
              <span className="text-yellow-300"> Minutes</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Generate ATS-friendly resumes and cover letters powered by artificial intelligence. 
              Land your dream job with professionally formatted documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToApp} 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                data-testid="hero-start-creating"
              >
                <i className="fas fa-magic mr-2" />
                Start Creating Free
              </Button>
              {/* <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                data-testid="hero-watch-demo"
              >
                <i className="fas fa-play mr-2" />
                Watch Demo
              </Button> */}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" />
                  <div className="h-2 bg-gray-200 rounded w-4/5" />
                  <div className="h-2 bg-gray-200 rounded w-3/4" />
                </div>
                <div className="pt-4">
                  <div className="h-3 bg-primary rounded w-1/3 mb-2" />
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-200 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
