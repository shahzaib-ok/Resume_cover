import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertResumeSchema, insertCoverLetterSchema } from "@shared/schema";
import { generateResumeContent, generateCoverLetterContent } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Generate resume endpoint
  app.post("/api/generate-resume", async (req, res) => {
    try {
      const validatedData = insertResumeSchema.parse(req.body);
      
      // Generate AI content
      const generatedResume = await generateResumeContent(validatedData);
      
      // Save to storage
      const resume = await storage.createResume({
        ...validatedData,
        generatedContent: generatedResume.content,
      });
      
      res.json({
        success: true,
        resume,
        generatedContent: generatedResume,
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to generate resume" 
      });
    }
  });

  // Generate cover letter endpoint
  app.post("/api/generate-cover-letter", async (req, res) => {
    try {
      const resumeData = insertResumeSchema.parse(req.body);
      
      // Generate AI content
      const generatedCoverLetter = await generateCoverLetterContent(resumeData);
      
      // Save to storage if resumeId provided
      if (req.body.resumeId) {
        await storage.createCoverLetter({
          resumeId: req.body.resumeId,
          userId: req.body.userId || null,
          content: generatedCoverLetter.content,
        });
      }
      
      res.json({
        success: true,
        coverLetter: generatedCoverLetter,
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to generate cover letter" 
      });
    }
  });

  // Get resume by ID
  app.get("/api/resume/:id", async (req, res) => {
    try {
      const resume = await storage.getResume(req.params.id);
      if (!resume) {
        return res.status(404).json({ error: "Resume not found" });
      }
      res.json(resume);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch resume" });
    }
  });

  // Get cover letters by resume ID
  app.get("/api/cover-letters/:resumeId", async (req, res) => {
    try {
      const coverLetters = await storage.getCoverLettersByResumeId(req.params.resumeId);
      res.json(coverLetters);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cover letters" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
