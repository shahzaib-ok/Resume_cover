const STORAGE_KEY = 'resumeai_user_data';

export interface StoredFormData {
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

export function saveFormData(data: Partial<StoredFormData>): void {
  try {
    const existing = loadFormData();
    const updated = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.warn('Failed to save form data to localStorage:', error);
  }
}

export function loadFormData(): StoredFormData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.warn('Failed to load form data from localStorage:', error);
  }
  
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    experience: '',
    skills: '',
    education: '',
    jobDescription: '',
    template: 'modern' as const,
  };
}

export function clearFormData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear form data from localStorage:', error);
  }
}
