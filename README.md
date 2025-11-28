# QuickQuiz — AI-assisted Quiz Generator & Performance Tracker

**Project for:** VITyarthi  
**Author:** [Disha Sengar]  
**Course:** (Programming in Java)  
**Date:** (28-11-2025)

## Project Overview
QuickQuiz is a web application that helps students and instructors generate short quizzes automatically, manage users, and track performance. It demonstrates full-stack development, modular design, and simple AI-assisted quiz generation (stubbed) suitable for a course project.

## Key Features
- User management (register/login, roles: student/instructor)
- Quiz generation module (prompt-based generator — pluggable AI)
- Quiz taking interface and scoring
- Performance analytics dashboard (per-user and class-level)
- Git-ready, modular backend and frontend

## Tech Stack
- Frontend: React (JSX)
- Backend: Node.js + Express
- Database: SQLite (lightweight, file-based) — placeholder (easy to switch to Firebase)
- Version control: Git

## Run (development)
### Backend
```bash
cd backend
npm install
node app.js
```
### Frontend
```bash
cd frontend
npm install
npm start
```

## Notes
- The quiz generation module includes a placeholder function `generateQuizFromPrompt(prompt)` where you can plug in an AI API (OpenAI / HuggingFace) or use rule-based generation.
- Add your screenshots in `/frontend/public/screenshots` and update README.

