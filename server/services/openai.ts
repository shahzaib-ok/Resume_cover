import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface ResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle?: string;
  experience?: string;
  skills?: string;
  education?: string;
  jobDescription?: string;
  template: string;
}

export interface GeneratedResume {
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

export async function generateResumeContent(data: ResumeData): Promise<GeneratedResume> {
  try {
    const prompt = `
      Create a professional, ATS-friendly resume content for the following person. 
      Respond with JSON in this exact format: 
      {
        "content": "full formatted resume text",
        "sections": {
          "header": "name and contact info",
          "summary": "professional summary paragraph",
          "experience": "formatted work experience section",
          "skills": ["skill1", "skill2", "skill3"],
          "education": "education section"
        }
      }

      Personal Information:
      - Name: ${data.firstName} ${data.lastName}
      - Email: ${data.email}
      - Phone: ${data.phone || 'Not provided'}
      - Desired Position: ${data.jobTitle || 'Professional'}
      - Work Experience: ${data.experience || 'Entry level professional'}
      - Skills: ${data.skills || 'General business skills'}
      - Education: ${data.education || 'Education background'}
      - Target Job Description: ${data.jobDescription || 'General professional role'}
      - Template Style: ${data.template}

      Requirements:
      1. Make the content ATS-friendly (no special formatting that might confuse applicant tracking systems)
      2. Tailor the content to match the target job description if provided
      3. Use strong action verbs and quantifiable achievements
      4. Keep the professional summary concise but impactful
      5. Organize skills by relevance to the target role
      6. Ensure proper formatting for the ${data.template} template style
      7. Include relevant keywords from the job description naturally
    `;

    // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer and career coach. Create professional, ATS-friendly resume content that helps job seekers land interviews."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      content: result.content || "Error generating resume content",
      sections: {
        header: result.sections?.header || `${data.firstName} ${data.lastName}`,
        summary: result.sections?.summary || "Professional with demonstrated experience",
        experience: result.sections?.experience || "Experience details",
        skills: result.sections?.skills || [],
        education: result.sections?.education || "Educational background"
      }
    };
  } catch (error) {
    throw new Error(`Failed to generate resume content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function generateCoverLetterContent(data: ResumeData): Promise<GeneratedCoverLetter> {
  try {
    const prompt = `
      Create a professional cover letter for the following person applying to a job. 
      Respond with JSON in this exact format:
      {
        "content": "full formatted cover letter text",
        "paragraphs": ["opening paragraph", "body paragraph 1", "body paragraph 2", "closing paragraph"]
      }

      Personal Information:
      - Name: ${data.firstName} ${data.lastName}
      - Desired Position: ${data.jobTitle || 'Professional role'}
      - Work Experience: ${data.experience || 'Professional experience'}
      - Skills: ${data.skills || 'Professional skills'}
      - Target Job Description: ${data.jobDescription || 'Professional opportunity'}

      Requirements:
      1. Create a compelling opening that mentions the specific role
      2. Highlight relevant experience and achievements
      3. Connect skills to the job requirements
      4. Show enthusiasm and cultural fit
      5. Include a strong call to action
      6. Keep it concise (3-4 paragraphs)
      7. Use professional but engaging tone
      8. Tailor content to the job description if provided
    `;

    // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: "You are an expert career coach and professional writer. Create compelling cover letters that help job seekers stand out to employers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      content: result.content || "Error generating cover letter content",
      paragraphs: result.paragraphs || ["Generated content not available"]
    };
  } catch (error) {
    throw new Error(`Failed to generate cover letter content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
