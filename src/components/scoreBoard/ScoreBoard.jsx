import { useEffect } from "react";
import { Link } from "react-router-dom";

const ScoreBoard = ({ quizQuestions, selectedAnswers, score }) => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // This is needed for Chrome compatibility
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null; // Cleanup the event listener when the component is unmounted
    };
  }, []);

  const handleTryAgain = () => {
    // Reset any necessary state values before redirecting
    history.push("/quizPage"); // Replace "/quizPage" with the appropriate path
  };
  return (
    <div className="container mx-auto flex justify-center">
      <div className="container mx-auto">
        <div>
          <h2>ScoreBoard</h2>
          <p>Score: {score}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-[450px] bg-gray-100 rounded-lg p-4 shadow-md">
            {quizQuestions.map((quiz, index) => (
              <div key={index}>
                <p>Question: {quiz.question}</p>
                <ul>
                  {quiz.choices.map((choice, choiceIndex) => (
                    <li
                      key={choiceIndex}
                      className={`${
                        selectedAnswers[index] === choiceIndex
                          ? quiz.correctAnswer === choice
                            ? "font-bold bg-green-500"
                            : "font-bold bg-red-500"
                          : ""
                      } ${
                        quiz.correctAnswer === choice
                          ? "font-bold bg-green-500"
                          : ""
                      }`}
                    >
                      {choice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="m-4 flex justify-center ">
          <Link
            to="/" // Update the path to an absolute path, e.g., "/quizPage"
            className="px-4 py-2 m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
            onClick={handleTryAgain}
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
