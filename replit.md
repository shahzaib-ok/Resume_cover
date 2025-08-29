# ResumeAI Pro - AI-Powered Resume & Cover Letter Generator

## Overview

ResumeAI Pro is a comprehensive web application that generates professional, ATS-friendly resumes and cover letters using artificial intelligence. The application addresses the high-demand problem of creating polished job application documents quickly and effectively. Built as a modern SaaS-style platform, it provides users with AI-powered content generation, multiple professional templates, and instant download capabilities. The application is designed to be SEO-friendly and includes strategic ad placement areas for future monetization through Google AdSense.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built using React with TypeScript, leveraging modern development practices and tools:

- **React Framework**: Uses React 18 with functional components and hooks for state management
- **Routing**: Implements client-side routing with Wouter for lightweight navigation
- **Styling**: TailwindCSS for utility-first styling with Radix UI components for accessible, pre-built UI elements
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build System**: Vite for fast development and optimized production builds

### Backend Architecture

The server-side follows a RESTful API design pattern:

- **Express.js Server**: Node.js with Express framework for handling HTTP requests
- **TypeScript**: Full TypeScript implementation for type safety across the stack
- **API Design**: RESTful endpoints for resume and cover letter generation
- **Middleware**: Custom logging and error handling middleware
- **Development Integration**: Vite middleware integration for seamless development experience

### Data Storage Solutions

The application implements a flexible storage architecture:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development and testing
- **Local Storage**: Browser localStorage for client-side form data persistence

### Authentication and Authorization

Currently implements a simplified approach suitable for the MVP:

- **User Management**: Basic user schema with username/password authentication
- **Session Handling**: Designed to integrate with session-based authentication
- **Data Association**: User-resume relationships for personalized content management

### AI Content Generation

The core feature leverages OpenAI's API for intelligent content creation:

- **Resume Generation**: AI-powered resume content based on user input and job descriptions
- **Cover Letter Generation**: Contextual cover letter creation using resume data
- **Template System**: Multiple professional templates (modern, classic, creative, minimalist)
- **ATS Optimization**: Content specifically formatted for Applicant Tracking Systems

### UI/UX Design System

Modern, accessible design with strategic monetization placement:

- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Ad Placement Strategy**: Strategic placement areas for banner, sidebar, and content ads
- **SEO Optimization**: Structured markup and meta tags for search engine visibility
- **User Experience**: Progressive form filling with real-time preview capabilities

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production deployment
- **Drizzle ORM**: Type-safe database client and query builder
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### AI Services
- **OpenAI API**: GPT-based content generation for resumes and cover letters
- **Content Processing**: Structured JSON responses for consistent formatting

### Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form for UI management
- **UI Components**: Radix UI primitives for accessible component foundations
- **Styling**: TailwindCSS for utility-first styling approach
- **Icons**: Font Awesome for comprehensive icon library
- **Date Handling**: date-fns for date manipulation and formatting

### Development Tools
- **Build Tools**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support for type safety
- **Validation**: Zod for runtime type validation and form schemas
- **Code Quality**: ESBuild for fast JavaScript/TypeScript compilation

### Deployment Infrastructure
- **Replit Integration**: Custom Replit plugins for development environment
- **Static Assets**: Vite-based asset optimization and bundling
- **Environment Configuration**: Environment-based configuration for different deployment stages

### Monetization Infrastructure
- **Ad Placement**: Strategic placeholder components ready for Google AdSense integration
- **SEO Framework**: Optimized meta tags, structured data, and semantic HTML for search rankings
- **Analytics Ready**: Component structure designed for easy analytics integration