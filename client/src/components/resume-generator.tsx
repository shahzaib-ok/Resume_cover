import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ResumePreview } from "./resume-preview";
import { apiRequest } from "@/lib/queryClient";
import { insertResumeSchema } from "@shared/schema";
import { ResumeFormData, GeneratedResumeContent } from "@/types/resume";
import { saveFormData, loadFormData } from "@/lib/storage";

export function ResumeGenerator() {
  const { toast } = useToast();
  const [generatedContent, setGeneratedContent] = useState<GeneratedResumeContent | null>(null);
  
  const form = useForm<ResumeFormData>({
    resolver: zodResolver(insertResumeSchema),
    defaultValues: loadFormData(),
  });

  const generateResumeMutation = useMutation({
    mutationFn: async (data: ResumeFormData) => {
      const response = await apiRequest('POST', '/api/generate-resume', data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setGeneratedContent(data.generatedContent);
        toast({
          title: "Success!",
          description: "Your resume has been generated successfully.",
        });
      } else {
        throw new Error(data.error || "Failed to generate resume");
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate resume. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Auto-save form data
  useEffect(() => {
    const subscription = form.watch((data) => {
      saveFormData(data as any);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: ResumeFormData) => {
    generateResumeMutation.mutate(data);
  };

  const handleCopy = async () => {
    if (!generatedContent) return;
    
    try {
      await navigator.clipboard.writeText(generatedContent.content);
      toast({
        title: "Copied!",
        description: "Resume content copied to clipboard.",
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
    if (!generatedContent) return;
    
    const blob = new Blob([generatedContent.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="app" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Resume Now</h2>
          <p className="text-xl text-muted-foreground">
            Fill in your details and let our AI create a professional resume for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Personal Information</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        {...form.register("firstName")}
                        data-testid="input-firstName"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-sm text-destructive mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        {...form.register("lastName")}
                        data-testid="input-lastName"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-sm text-destructive mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="jobTitle">Desired Job Title</Label>
                    <Input
                      id="jobTitle"
                      {...form.register("jobTitle")}
                      data-testid="input-jobTitle"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Work Experience</Label>
                    <Textarea
                      id="experience"
                      rows={4}
                      placeholder="List your recent positions and achievements"
                      {...form.register("experience")}
                      data-testid="textarea-experience"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="skills">Key Skills</Label>
                    <Textarea
                      id="skills"
                      rows={3}
                      placeholder="Separate with commas"
                      {...form.register("skills")}
                      data-testid="textarea-skills"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="education">Education Background</Label>
                    <Textarea
                      id="education"
                      rows={3}
                      {...form.register("education")}
                      data-testid="textarea-education"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="jobDescription">Target Job Description</Label>
                    <Textarea
                      id="jobDescription"
                      rows={4}
                      placeholder="Paste job posting for AI optimization"
                      {...form.register("jobDescription")}
                      data-testid="textarea-jobDescription"
                    />
                  </div>
                  
                  <div>
                    <Label>Resume Template</Label>
                    <RadioGroup
                      value={form.watch("template")}
                      onValueChange={(value) => form.setValue("template", value as any)}
                      className="grid grid-cols-2 gap-3 mt-2"
                    >
                      {[
                        { value: "modern", label: "Modern" },
                        { value: "professional", label: "Professional" },
                        { value: "creative", label: "Creative" },
                        { value: "minimal", label: "Minimal" }
                      ].map((template) => (
                        <div key={template.value} className="flex items-center space-x-2 p-3 border border-input rounded-lg">
                          <RadioGroupItem value={template.value} id={template.value} />
                          <Label htmlFor={template.value}>{template.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={generateResumeMutation.isPending}
                    data-testid="button-generate-resume"
                  >
                    {generateResumeMutation.isPending ? (
                      <>
                        <div className="loading-spinner mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-magic mr-2" />
                        Generate Resume
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Preview Panel */}
          <div className="lg:col-span-6">
            <ResumePreview
              content={generatedContent}
              isLoading={generateResumeMutation.isPending}
              onCopy={handleCopy}
              onDownload={handleDownload}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
