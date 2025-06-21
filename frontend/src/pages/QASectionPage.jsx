import React, { useState } from "react";
import axios from "axios";
import QASection from "../components/QASection";
import { useNavigate } from "react-router-dom";

function QASectionPage() {
  const [qaAnswer, setQaAnswer] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file!");
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:8000/upload/", formData);
    alert("File uploaded successfully");
  };

  const askQuestion = async (question) => {
    const formData = new FormData();
    formData.append("question", question);
    const res = await axios.post("http://localhost:8000/answer/", formData);
    setQaAnswer(res.data.response);
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#212121",
        minHeight: "100vh",
        color: "#fff",
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // center all elements
      }}
    >
      <h1 style={{ color: "#80cbc4", fontSize: "40px", marginBottom: "40px", textAlign: "center" }}>
        🧠 Ask Questions
      </h1>

      <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#000",
          }}
        />
        <button
          onClick={handleUpload}
          style={{
            padding: "12px 24px",
            background: "#4db6ac",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          📤 Upload
        </button>
      </div>

      <div style={{ marginBottom: "30px", width: "100%", maxWidth: "800px" }}>
        <QASection onAsk={askQuestion} answer={qaAnswer} />
      </div>

      <div style={{ marginTop: "auto" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 24px",
            backgroundColor: "#6d4c41",
            color: "white",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          🔙 Back to Home
        </button>
      </div>
    </div>
  );
}

export default QASectionPage;
