import React, { useState } from "react";
import axios from "axios";

const GradingSection = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!question.trim() || !answer.trim()) {
      alert("Please enter both question and answer.");
      return;
    }

    const formData = new FormData();
    formData.append("question", question);
    formData.append("answer", answer);

    try {
      const res = await axios.post("http://localhost:8000/grade/", formData);
      setResult(res.data);
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert("Error: " + (error.response.data.error || "Server error"));
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <input
        type="text"
        placeholder="Enter Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
      />
      <textarea
        placeholder="Enter Your Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ width: "100%", height: "150px", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#4a148c",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      {result && (
        <div style={{ marginTop: "30px", backgroundColor: "#2a2a2a", padding: "15px", borderRadius: "8px" }}>
          <h3>📘 Reference Answer:</h3>
          <p>{result.reference}</p>

          <h3>📝 Your Answer:</h3>
          <p>{result.user_answer}</p>

          <h3>🎯 Score:</h3>
          <p style={{ color: "yellow", fontSize: "20px" }}>{result.score} / 100</p>
        </div>
      )}
    </div>
  );
};

export default GradingSection;
