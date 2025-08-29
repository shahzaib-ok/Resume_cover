export interface ResumeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  experience: string;
  skills: string;
  education: string;
  jobDescription: string;
  template: 'modern' | 'professional' | 'creative' | 'minimal';
}

export interface GeneratedResumeContent {
  content: string;
  sections: {
    header: string;
    summary: string;
    experience: string;
    skills: string[];
    education: string;
  };
}

export interface GeneratedCoverLetter {
  content: string;
  paragraphs: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
