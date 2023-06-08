import { useState, useEffect } from "react";
import ScoreBoard from "../scoreBoard/ScoreBoard";
const QuizPage = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);

  //   useEffect(() => {
  //     // Fetch quiz questions from MongoDB and update the state
  //     const fetchQuizQuestions = async () => {
  //       try {
  //         const response = await fetch("/api/quizQuestions"); // Replace with your API endpoint to fetch quiz questions
  //         const data = await response.json();
  //         setQuizQuestions(data);
  //         setSelectedAnswers(new Array(data.length).fill(null)); // Initialize selectedAnswers array with null values
  //       } catch (error) {
  //         console.error("Error fetching quiz questions:", error);
  //       }
  //     };

  //     fetchQuizQuestions();
  //   }, []);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setQuizQuestions(data);
        setSelectedAnswers(new Array(data.length).fill(null));
      });
  }, []);

  const handleAnswerSelect = (selectedAnswerIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = selectedAnswerIndex;
    console.log(selectedAnswerIndex);
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleQuizSubmit = () => {
    let newScore = 0;
    quizQuestions.forEach((quiz, index) => {
      if (quiz.choices[selectedAnswers[index]] === quiz.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setCurrentQuestionIndex(quizQuestions.length);
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="container mx-auto flex justify-center">
        <div className="mt-4 text-white font-bold">
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </button>
        </div>
      </div>
    );
  }

  if (currentQuestionIndex === quizQuestions.length) {
    return (
      <ScoreBoard
        quizQuestions={quizQuestions}
        selectedAnswers={selectedAnswers}
        score={score}
      ></ScoreBoard>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-2 flex justify-center items-center">
      <div className="w-[450px] border p-2 flex flex-col justify-center shadow-lg mt-8">
        <h2>Quiz</h2>
        <p>
          Question {currentQuestionIndex + 1}/{quizQuestions.length}
        </p>
        <h3 className="m-2 font-bold">{currentQuestion.question}</h3>
        <ul className="m-4">
          {currentQuestion.choices.map((choice, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswers[currentQuestionIndex] === index}
                  onChange={() => handleAnswerSelect(index)}
                />
                {choice}
              </label>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
          >
            Previous
          </button>
          {currentQuestionIndex < quizQuestions.length - 1 && (
            <button
              className="px-4 py-2 m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestionIndex] === null}
            >
              Next
            </button>
          )}
          {currentQuestionIndex === quizQuestions.length - 1 && (
            <button
              className="px-4 py-2 m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
              onClick={handleQuizSubmit}
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
