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
    // Fallback response when OpenAI API fails (quota, network, etc.)
    console.error('OpenAI API error:', error);
    
    const fallbackExperience = data.experience || `Professional Experience
• Led multiple projects with successful outcomes
• Collaborated effectively with cross-functional teams
• Implemented best practices and improved processes`;

    const fallbackSkills = data.skills ? data.skills.split(',').map(skill => `• ${skill.trim()}`).join('\n') : `• Problem solving
• Team collaboration
• Project management
• Communication`;

    const fallbackEducation = data.education || `Educational Background
• Relevant coursework and certifications
• Continuous learning and professional development`;

    const fallbackContent = `${data.firstName} ${data.lastName}
${data.email} ${data.phone ? '| ' + data.phone : ''}

PROFESSIONAL SUMMARY
${data.jobTitle ? `Experienced ${data.jobTitle}` : 'Professional'} with a strong background in ${data.skills || 'various technical and business skills'}. Proven track record of delivering high-quality results and contributing to team success.

WORK EXPERIENCE
${fallbackExperience}

SKILLS
${fallbackSkills}

EDUCATION
${fallbackEducation}`;

    return {
      content: fallbackContent,
      sections: {
        header: `${data.firstName} ${data.lastName}\n${data.email} ${data.phone ? '| ' + data.phone : ''}`,
        summary: `${data.jobTitle ? `Experienced ${data.jobTitle}` : 'Professional'} with a strong background in ${data.skills || 'various technical and business skills'}. Proven track record of delivering high-quality results and contributing to team success.`,
        experience: data.experience || 'Professional Experience\n• Led multiple projects with successful outcomes\n• Collaborated effectively with cross-functional teams\n• Implemented best practices and improved processes',
        skills: data.skills ? data.skills.split(',').map(skill => skill.trim()) : ['Problem solving', 'Team collaboration', 'Project management', 'Communication'],
        education: data.education || 'Educational Background\n• Relevant coursework and certifications\n• Continuous learning and professional development'
      }
    };
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
    // Fallback response when OpenAI API fails (quota, network, etc.)
    console.error('OpenAI API error for cover letter:', error);
    
    const fallbackContent = `Dear Hiring Manager,

I am writing to express my strong interest in the ${data.jobTitle || 'position'} at your organization. With my background in ${data.skills || 'professional skills'} and proven track record of success, I am confident that I would be a valuable addition to your team.

In my previous experience, I have ${data.experience ? 'demonstrated expertise in ' + data.experience.split('.')[0] : 'developed strong skills in problem-solving, team collaboration, and project management'}. My technical skills include ${data.skills || 'various professional competencies'}, which directly align with the requirements for this role.

I am particularly excited about this opportunity because it represents a perfect match between my skills and your needs. ${data.education ? 'My educational background has provided me with a solid foundation, ' : ''}and I am eager to contribute to your organization's continued success.

Thank you for your time and consideration. I look forward to the opportunity to discuss how my experience and enthusiasm can benefit your team.

Sincerely,
${data.firstName} ${data.lastName}`;

    return {
      content: fallbackContent,
      paragraphs: [
        `Dear Hiring Manager,

I am writing to express my strong interest in the ${data.jobTitle || 'position'} at your organization. With my background in ${data.skills || 'professional skills'} and proven track record of success, I am confident that I would be a valuable addition to your team.`,
        
        `In my previous experience, I have ${data.experience ? 'demonstrated expertise in ' + data.experience.split('.')[0] : 'developed strong skills in problem-solving, team collaboration, and project management'}. My technical skills include ${data.skills || 'various professional competencies'}, which directly align with the requirements for this role.`,
        
        `I am particularly excited about this opportunity because it represents a perfect match between my skills and your needs. ${data.education ? 'My educational background has provided me with a solid foundation, ' : ''}and I am eager to contribute to your organization's continued success.`,
        
        `Thank you for your time and consideration. I look forward to the opportunity to discuss how my experience and enthusiasm can benefit your team.

Sincerely,
${data.firstName} ${data.lastName}`
      ]
    };
  }
}
