import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { GeneratedCoverLetter } from "@/types/resume";
import { loadFormData } from "@/lib/storage";

export function CoverLetterGenerator() {
  const { toast } = useToast();
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState<GeneratedCoverLetter | null>(null);

  const generateCoverLetterMutation = useMutation({
    mutationFn: async () => {
      const formData = loadFormData();
      const response = await apiRequest('POST', '/api/generate-cover-letter', formData);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setGeneratedCoverLetter(data.coverLetter);
        toast({
          title: "Success!",
          description: "Your cover letter has been generated successfully.",
        });
      } else {
        throw new Error(data.error || "Failed to generate cover letter");
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate cover letter. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    const formData = loadFormData();
    if (!formData.firstName || !formData.lastName) {
      toast({
        title: "Missing Information",
        description: "Please fill in your personal information in the resume section first.",
        variant: "destructive",
      });
      return;
    }
    generateCoverLetterMutation.mutate();
  };

  const handleCopy = async () => {
    if (!generatedCoverLetter) return;
    
    try {
      await navigator.clipboard.writeText(generatedCoverLetter.content);
      toast({
        title: "Copied!",
        description: "Cover letter content copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    if (!generatedCoverLetter) return;
    
    const blob = new Blob([generatedCoverLetter.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-cover-letter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Cover Letter Generator</h2>
          <p className="text-xl text-muted-foreground">
            Create compelling cover letters that complement your resume
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Cover Letter</h3>
              <Button 
                onClick={handleGenerate}
                disabled={generateCoverLetterMutation.isPending}
                data-testid="button-generate-cover-letter"
              >
                {generateCoverLetterMutation.isPending ? (
                  <>
                    <div className="loading-spinner mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-file-alt mr-2" />
                    Generate Cover Letter
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {generateCoverLetterMutation.isPending ? (
              <div className="text-center py-12" data-testid="cover-letter-loading">
                <div className="loading-spinner mx-auto mb-4" />
                <p className="text-muted-foreground">AI is generating your cover letter...</p>
              </div>
            ) : generatedCoverLetter ? (
              <div className="min-h-[400px]" data-testid="cover-letter-content">
                <div className="cover-letter bg-white p-8 rounded-lg border" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', lineHeight: '1.6' }}>
                  <div className="mb-6">
                    <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
                  </div>
                  
                  <div className="text-gray-700 space-y-4 whitespace-pre-line">
                    {generatedCoverLetter.content}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-12" data-testid="cover-letter-empty">
                <i className="fas fa-envelope text-4xl mb-4 opacity-50" />
                <p>Your AI-generated cover letter will appear here</p>
                <p className="text-sm">Click "Generate Cover Letter" to create a personalized cover letter</p>
              </div>
            )}
            
            {generatedCoverLetter && (
              <div className="flex justify-center space-x-4 mt-6">
                <Button 
                  variant="secondary"
                  onClick={handleCopy}
                  data-testid="button-copy-cover-letter"
                >
                  <i className="fas fa-copy mr-2" />
                  Copy Cover Letter
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleDownload}
                  data-testid="button-download-cover-letter"
                >
                  <i className="fas fa-download mr-2" />
                  Download
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
