import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-file-alt text-primary-foreground text-sm" />
            </div>
            <span className="text-xl font-bold text-foreground">ResumeAI Pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('templates')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-templates"
            >
              Templates
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('app')}
              data-testid="nav-get-started"
            >
              Get Started Free
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-foreground" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('templates')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Templates
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('app')}
                className="w-full"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
