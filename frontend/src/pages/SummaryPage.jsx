import React, { useState } from "react";
import axios from "axios";
import SummarySection from "../components/SummarySection";

function SummaryPage() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:8000/upload/", formData);
    alert("File uploaded successfully.");
  };

  const handleSummarize = async () => {
    const res = await axios.get("http://localhost:8000/summarize/");
    setSummary(res.data.summary);
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "linear-gradient(to right, #8B4513, #A0522D)",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontSize: "18px",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>🧠 Summarize Document</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{
          marginBottom: "20px",
          fontSize: "16px",
          padding: "8px",
          borderRadius: "6px",
        }}
      />

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <button
          onClick={handleUpload}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#4a148c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          📤 Upload File
        </button>
        <button
          onClick={handleSummarize}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#00695c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          📄 Summarize
        </button>
      </div>

      <SummarySection summary={summary} />
    </div>
  );
}

export default SummaryPage;
