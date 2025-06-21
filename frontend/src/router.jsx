import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import SummaryPage from "./pages/SummaryPage";
import QASectionPage from "./pages/QASectionPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/qa" element={<QASectionPage />} />
      </Routes>
    </Router>
  );
}
