import React from "react";
import GradingSection from "../components/GradingSection";
import { useNavigate } from "react-router-dom";

const GradingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Answer Grading</h1>

      <GradingSection />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6d4c41",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🔙 Back to Home
        </button>
      </div>
    </div>
  );
};

export default GradingPage;
