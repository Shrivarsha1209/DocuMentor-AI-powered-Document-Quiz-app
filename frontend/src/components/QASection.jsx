
import React, { useState } from "react";

function QASection({ onAsk, answer }) {
  const [question, setQuestion] = useState("");

  const handleAsk = () => {
    if (question.trim()) {
      onAsk(question);
      setQuestion(""); 
    }
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        ❓ Ask a Question from Document to Clear Your Doubts!
      </h2>

      <textarea
        rows={5}
        cols={50}
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          padding: "15px",
          fontSize: "18px",
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          resize: "none",
          marginBottom: "20px",
        }}
      />
      <br />

      <button
        onClick={handleAsk}
        style={{
          padding: "12px 28px",
          fontSize: "18px",
          backgroundColor: "#00796b",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ▶️ Ask
      </button>

      {answer && (
        <div
          style={{
            marginTop: "30px",
            fontSize: "20px",
            color: "#c5e1a5",
            textAlign: "left",
            maxWidth: "600px",
            margin: "30px auto 0 auto",
            backgroundColor: "#2e7d32",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QASection;
