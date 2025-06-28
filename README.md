# DocuMentor – AI-Powered Document-Based Quiz Generator, Summarizer, Question Answering, and Answer Grading

## 📄 Project Description  

DocuMentor is a full-stack AI-powered web application that allows users to upload documents and interact with them by:

🧠 Generating Summaries
📝 Creating Quizzes from Content
❓ Asking Contextual Questions
📊 Grading Answers using Semantic Similarity

Built with FastAPI + React, it leverages NLP models like Sentence-BERT for grading and optionally T5 for question generation along with gemini api.

## 🚀 Features 

 1.Upload .pdf or .txt documents
 2.Auto-summarize content
 3.Generate multiple-choice quiz questions
 4.Ask free-form questions from the document
 5.Grade short answers using Sentence-BERT embeddings
 6.Styled, user-friendly UI with multiple navigation options


 ## 🛠️ Tech Stack


 | Layer      | Technologies                           |
| ---------- | -------------------------------------- |
| Frontend   | React, Axios, React Router DOM         |
| Backend    | FastAPI, PyMuPDF, SentenceTransformers |
| NLP Models | Sentence-BERT, T5 (optional)           |
| Styling    | CSS-in-JS (inline styling)             |


## 🏗️ Project Structure

📁 quizapp/ ├── 📁 backend/ │ ├── main.py # FastAPI entry point │ ├── qa_engine.py # Handles question answering │ ├── quiz_generator.py # Generates quizzes from text │ ├── summarizer.py # Summarizes the uploaded content │ ├── answer_grader.py # Grades user answers │ └── uploaded_text.txt # Stores uploaded document text ├── 📁 frontend/ │ ├── 📁 src/ │ │ ├── App.js # Main React component │ │ ├── 📁 components/ │ │ │ ├── Home.jsx │ │ │ ├── SummarySection.jsx │ │ │ └── GradingSection.jsx │ │ ├── 📁 pages/ │ │ │ ├── SummaryPage.jsx │ │ │ ├── QuizPage.jsx │ │ │ ├── QASectionPage.jsx │ │ │ └── GradingPage.jsx │ │ └── index.js # Entry point for React app </code> </pre>


/backend → FastAPI server with endpoints
/frontend → React-based user interface
/README.md → This file


## ⚙️ Setup Instructions

### 📦 Backend (FastAPI + Hugging Face)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # or source venv/bin/activate (Linux/Mac)
pip install -r requirements.txt
uvicorn main:app --reload


### 🌐 Frontend (React)

fastapi
uvicorn
pymupdf
transformers
sentence-transformers
python-multipart

steps to start frontend:
cd frontend
npm install
npm start


## 🚀 Usage Guide

1. Start the backend server using FastAPI:
   ```bash
   uvicorn main:app --reload


2. Open the frontend in your browser at: 
http://localhost:3000

3. Upload a document (PDF/text) using the upload interface.

4. Choose from the following features:

    ✅ Generate Quiz: AI will create quiz questions and answers based on the document.

    📝 Summarize: Get a concise summary of the uploaded content.

    ❓ Doubt Clearing: Enter a custom question related to the document, and get a contextual AI-generated answer.

    🎯 Grade Answer: Input your answer to a question and get a semantic similarity score with the expected answer.

    

## 🧠 Architecture Overview

Frontend (React):  
  Built with React, it handles navigation, document upload, user interaction, and dynamic display of quizzes, summaries, and answer grading.

  Navigation via React Router
  Axios for API communication
  Dynamic state-based UI rendering

Backend (FastAPI)::  
  Powered by FastAPI, it exposes REST endpoints that interact with AI models and services:
  Routes: /upload/, /summarize/, /generate_quiz/, /answer/, /grade/
  PyMuPDF to extract text from PDFs
  Sentence-BERT for semantic similarity in grading
  Optional T5 model for intelligent question generation

    - 🧠 Uses Gemini API (Google) for:
    - Document summarization
    - Quiz question & answer generation
    - 📊 Uses Sentence-Transformers for:
    - Semantic similarity scoring during answer grading

- Communication:
  - Frontend communicates with backend using Axios for seamless API requests and responses.


👨‍💻 Authors
Shri Varsha P

Demo video link 
https://drive.google.com/file/d/1UbL0sALl8dhA3Iugs-lCA8meBFT1zIn2/view?usp=sharing 
