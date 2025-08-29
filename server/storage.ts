import { type User, type InsertUser, type Resume, type InsertResume, type CoverLetter, type InsertCoverLetter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Resume methods
  getResume(id: string): Promise<Resume | undefined>;
  getResumesByUserId(userId: string): Promise<Resume[]>;
  createResume(resume: InsertResume): Promise<Resume>;
  updateResume(id: string, resume: Partial<Resume>): Promise<Resume | undefined>;
  
  // Cover letter methods
  getCoverLetter(id: string): Promise<CoverLetter | undefined>;
  getCoverLettersByResumeId(resumeId: string): Promise<CoverLetter[]>;
  createCoverLetter(coverLetter: InsertCoverLetter): Promise<CoverLetter>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private resumes: Map<string, Resume>;
  private coverLetters: Map<string, CoverLetter>;

  constructor() {
    this.users = new Map();
    this.resumes = new Map();
    this.coverLetters = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async getResume(id: string): Promise<Resume | undefined> {
    return this.resumes.get(id);
  }

  async getResumesByUserId(userId: string): Promise<Resume[]> {
    return Array.from(this.resumes.values()).filter(
      (resume) => resume.userId === userId,
    );
  }

  async createResume(insertResume: InsertResume): Promise<Resume> {
    const id = randomUUID();
    const resume: Resume = {
      ...insertResume,
      id,
      userId: insertResume.userId || null,
      generatedContent: insertResume.generatedContent || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.resumes.set(id, resume);
    return resume;
  }

  async updateResume(id: string, updateData: Partial<Resume>): Promise<Resume | undefined> {
    const existing = this.resumes.get(id);
    if (!existing) return undefined;
    
    const updated: Resume = {
      ...existing,
      ...updateData,
      updatedAt: new Date(),
    };
    this.resumes.set(id, updated);
    return updated;
  }

  async getCoverLetter(id: string): Promise<CoverLetter | undefined> {
    return this.coverLetters.get(id);
  }

  async getCoverLettersByResumeId(resumeId: string): Promise<CoverLetter[]> {
    return Array.from(this.coverLetters.values()).filter(
      (coverLetter) => coverLetter.resumeId === resumeId,
    );
  }

  async createCoverLetter(insertCoverLetter: InsertCoverLetter): Promise<CoverLetter> {
    const id = randomUUID();
    const coverLetter: CoverLetter = {
      ...insertCoverLetter,
      id,
      resumeId: insertCoverLetter.resumeId || null,
      userId: insertCoverLetter.userId || null,
      createdAt: new Date(),
    };
    this.coverLetters.set(id, coverLetter);
    return coverLetter;
  }
}

export const storage = new MemStorage();
