import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(/background.jpg)`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "40px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>📘 Welcome to DocuMentor App!</h1>
      <p>Choose what you'd like to do:</p>

      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <button onClick={() => navigate("/quiz")} style={btnStyle}>📝 Generate Quiz</button>
        <button onClick={() => navigate("/summary")} style={btnStyle}>🧠 Summarize Document</button>
        <button onClick={() => navigate("/qa")} style={btnStyle}>❓ Ask Questions</button>
        <button onClick={() => navigate("/grade")} style={btnStyle}>📊 Grade Answer</button>



      </div>
    </div>
  );
};

const btnStyle = {
  padding: "15px 30px",
  fontSize: "18px",
  borderRadius: "10px",
  background: "#4a148c",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default Home;
