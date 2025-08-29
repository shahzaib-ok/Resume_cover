import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GeneratedResumeContent } from "@/types/resume";

interface ResumePreviewProps {
  content: GeneratedResumeContent | null;
  isLoading: boolean;
  onCopy: () => void;
  onDownload: () => void;
}

export function ResumePreview({ content, isLoading, onCopy, onDownload }: ResumePreviewProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Live Preview</h3>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12" data-testid="loading-state">
            <div className="loading-spinner mx-auto mb-4" />
            <p className="text-muted-foreground">AI is generating your resume...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Live Preview</h3>
          <div className="flex space-x-2">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={onCopy}
              disabled={!content}
              data-testid="button-copy"
            >
              <i className="fas fa-copy mr-2" />
              Copy
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onDownload}
              disabled={!content}
              data-testid="button-download"
            >
              <i className="fas fa-download mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {content ? (
          <div 
            id="resumePreview" 
            className="prose max-w-none"
            data-testid="resume-preview-content"
          >
            <div className="resume-content bg-white p-8 shadow-sm" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', lineHeight: '1.5' }}>
              <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                <div dangerouslySetInnerHTML={{ __html: content.sections.header }} />
              </header>
              
              {content.sections.summary && (
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Summary</h3>
                  <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.sections.summary }} />
                </section>
              )}
              
              {content.sections.experience && (
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Experience</h3>
                  <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.sections.experience }} />
                </section>
              )}
              
              {content.sections.skills && content.sections.skills.length > 0 && (
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {content.sections.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}
              
              {content.sections.education && (
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Education</h3>
                  <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.sections.education }} />
                </section>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12" data-testid="empty-preview">
            <i className="fas fa-file-alt text-4xl mb-4 opacity-50" />
            <p>Your AI-generated resume will appear here</p>
            <p className="text-sm">Fill out the form and click "Generate Resume" to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
