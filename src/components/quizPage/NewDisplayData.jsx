import { useState, useEffect } from "react";
const NewDisplayData = () => {
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
      console.log(quiz);
      if (quiz.choices[selectedAnswers[index]] === quiz.correctAnswer) {
        newScore += 1;
      }
    });
    console.log("new score", newScore);
    setScore(newScore);
    setCurrentQuestionIndex(quizQuestions.length);
    console.log("selectedAnswer", selectedAnswers);
  };

  if (quizQuestions.length === 0) {
    return <p>Loading quiz questions...</p>;
  }

  if (currentQuestionIndex === quizQuestions.length) {
    return (
      <div>
        <h2>Scoreboard</h2>
        <p>Score: {score}</p>
      </div>
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
            <button onClick={handleQuizSubmit}>Submit Quiz</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewDisplayData;
