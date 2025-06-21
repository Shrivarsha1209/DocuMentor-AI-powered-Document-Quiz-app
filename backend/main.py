from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from quiz_generator import generate_quiz
from summarizer import summarize
from qa_engine import answer_question
from answer_grader import grade, generate_reference_answer
# import PyMuPDF
# fitz = PyMuPDF 
import pymupdf as fitz


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

doc_text = ""  


@app.post("/upload/")
async def upload_doc(file: UploadFile):
    global doc_text
    if file.filename.endswith(".pdf"):
        file.file.seek(0)
        doc = fitz.open(stream=file.file.read(), filetype="pdf")
        doc_text = "\n".join(page.get_text() for page in doc)
    else:
        content = await file.read()
        doc_text = content.decode("utf-8")
    return {"message": "Document uploaded successfully."}


@app.get("/summarize/")
async def get_summary():
    if not doc_text:
        return {"summary": "No document uploaded yet."}
    return {"summary": summarize(doc_text)}


@app.get("/generate_quiz/")
def generate_quiz_endpoint():
    if not doc_text:
        return {"quiz": "No document uploaded yet."}
    return {"quiz": generate_quiz(doc_text)}


@app.post("/answer/")
async def get_answer(question: str = Form(...)):
    if not doc_text:
        return {"response": "No document uploaded yet."}
    return {"response": answer_question(doc_text, question)}

@app.post("/grade/")
async def grade_short_answer(question: str = Form(...), answer: str = Form(...)):
    if not doc_text:
        return {
            "reference": "",
            "user_answer": answer,
            "score": 0,
            "message": "No document uploaded yet."
        }
    reference = generate_reference_answer(question, doc_text)
    score = grade(reference, answer)
    return {
        "reference": reference,
        "user_answer": answer,
        "score": score
    }