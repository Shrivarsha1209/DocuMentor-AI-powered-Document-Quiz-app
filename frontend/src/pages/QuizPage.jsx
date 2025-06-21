import React, { useState } from "react";
import axios from "axios";
import QuizSection from "../components/QuizSection";

function QuizPage() {
  const [file, setFile] = useState(null);
  const [quizText, setQuizText] = useState("");
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file!");
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:8000/upload/", formData);
    alert("File uploaded successfully");
  };

  const getQuiz = async () => {
    setLoadingQuiz(true);
    try {
      const res = await axios.get("http://localhost:8000/generate_quiz/");
      setQuizText(res.data.quiz);
    } catch (err) {
      console.error("Quiz generation error:", err);
    } finally {
      setLoadingQuiz(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #3e2723, #000000)",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        fontSize: "20px",
      }}
    >
      <h1
        style={{
          color: "#ffcc80",
          fontSize: "40px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        🧠 Generate Quiz
      </h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          padding: "10px",
          width: "300px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      />

      <div style={{ marginBottom: "30px" }}>
        <button
          onClick={handleUpload}
          style={{
            marginRight: "15px",
            padding: "12px 24px",
            fontSize: "18px",
            background: "#6d4c41",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          📤 Upload File
        </button>
        <button
          onClick={getQuiz}
          disabled={loadingQuiz}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            background: "#ff8f00",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: loadingQuiz ? "not-allowed" : "pointer",
          }}
        >
          {loadingQuiz ? "⏳ Generating Quiz..." : "📝 Generate Quiz"}
        </button>
      </div>

      {loadingQuiz && (
        <p style={{ color: "#ffc107", fontSize: "18px" }}>
          ⏳ Generating quiz, please wait...
        </p>
      )}

      {quizText && (
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <QuizSection quizText={quizText} />
        </div>
      )}
    </div>
  );
}

export default QuizPage;
