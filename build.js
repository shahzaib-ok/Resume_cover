#!/usr/bin/env node

// Custom build script for Vercel
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
  console.log('Building frontend...');
  
  try {
    // Build the frontend
    await execAsync('npm run build:frontend');
    console.log('Frontend build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();