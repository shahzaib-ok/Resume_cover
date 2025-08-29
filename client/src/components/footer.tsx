export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-file-alt text-primary-foreground text-sm" />
              </div>
              <span className="text-xl font-bold">ResumeAI Pro</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The most advanced AI-powered resume and cover letter generator. 
              Create professional, ATS-friendly documents in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-twitter">
                <i className="fab fa-twitter text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-linkedin">
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-facebook">
                <i className="fab fa-facebook text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cover Letter Generator</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ResumeAI Pro. All rights reserved. Built with AI for job seekers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
