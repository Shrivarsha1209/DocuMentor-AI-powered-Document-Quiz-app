import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizSection({ quizText }) {
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  if (!quizText || quizText.trim() === "") return null;

  const parseQuestions = (quiz) => {
    const rawQuestions = quiz.split(/\*\*Q\d+:/).filter(Boolean);
    return rawQuestions.map((block) => {
      const lines = block.trim().split("\n").map((line) => line.trim());
      const questionText = lines[0];
      const options = lines.filter((line) => /^[A-D]\./.test(line));
      const answerLine = lines.find((line) => line.startsWith("Answer:"));
      const correct = answerLine?.split(":")[1]?.trim() ?? "";
      return { questionText, options, correct };
    });
  };

  const questions = parseQuestions(quizText);
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelect = (qIdx, option) => {
    setUserAnswers((prev) => ({ ...prev, [qIdx]: option }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correct) correctCount++;
    });
    setScore(`${correctCount} / ${questions.length}`);
    setSubmitted(true);
  };

  const userAnswer = userAnswers[currentQuestionIndex];
  const isCorrect = userAnswer === currentQuestion.correct;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        background: "linear-gradient(to bottom right, #3e2723, #000000)",
        color: "#f5f5dc",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#ffcc80" }}>📝 Quiz</h2>
      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #795548",
          borderRadius: "8px",
          backgroundColor: "#4e342e",
        }}
      >
        <p>
          <strong>
            {currentQuestionIndex + 1}. {currentQuestion.questionText}
          </strong>
        </p>
        {currentQuestion.options.map((opt) => {
          const optionLetter = opt.trim()[0];
          const isSelected = userAnswer === optionLetter;
          const correctAnswer = currentQuestion.correct;

          return (
            <label
              key={opt}
              style={{
                display: "block",
                marginLeft: "10px",
                color: submitted
                  ? isSelected
                    ? isCorrect
                      ? "lime"
                      : "red"
                    : correctAnswer === optionLetter
                    ? "lime"
                    : "#f5f5dc"
                  : "#f5f5dc",
              }}
            >
              <input
                type="radio"
                name={`q-${currentQuestionIndex}`}
                value={optionLetter}
                onChange={() => handleSelect(currentQuestionIndex, optionLetter)}
                disabled={submitted}
              />
              {opt}
            </label>
          );
        })}

        {submitted && (
          <p style={{ marginLeft: "10px" }}>
            Your Answer:{" "}
            <span
              style={{
                color: userAnswer
                  ? isCorrect
                    ? "lime"
                    : "red"
                  : "#ccc",
              }}
            >
              {userAnswer || "Not answered"}
            </span>
            <br />
            Correct Answer:{" "}
            <span style={{ color: "lime" }}>{currentQuestion.correct}</span>
          </p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
            }
            disabled={currentQuestionIndex === 0}
            style={{ padding: "8px 12px" }}
          >
            ⬅ Back
          </button>
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) =>
                Math.min(prev + 1, questions.length - 1)
              )
            }
            disabled={currentQuestionIndex === questions.length - 1}
            style={{ padding: "8px 12px", marginLeft: "10px" }}
          >
            Next ➡
          </button>
        </div>

        {!submitted && (
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ffb74d",
              color: "black",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            ✅ Submit Quiz
          </button>
        )}
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px",
            backgroundColor: "#6d4c41",
            color: "white",
            borderRadius: "5px",
          }}
        >
          🔙 Back to Home
        </button>
      </div>

      {score && (
        <h3 style={{ marginTop: "20px", color: "#ffee58" }}>
          Your Score: {score}
        </h3>
      )}
    </div>
  );
}

export default QuizSection;
