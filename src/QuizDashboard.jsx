import { useState } from "react";

const QuizDashboard = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleChoiceChange = (index, e) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = e.target.value;
    setChoices(updatedChoices);
  };

  const handleRemoveChoice = (index) => {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    setChoices(updatedChoices);
  };

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleSaveQuestion = () => {
    // Logic to save the question, choices, and correct answer
    // You can add your own implementation here

    const bodyItems = { question, choices, correctAnswer };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyItems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestion("");
        setChoices([]);
        setCorrectAnswer("");
      });
    // console.log("Question:", question);
    // console.log("Choices:", choices);
    // console.log("Correct Answer:", correctAnswer);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="w-[450px]">
        <h2 className="text-2xl font-bold mb-4">Quiz Dashboard</h2>
        <div>
          <label className="block mb-2">Question:</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full mb-4"
            rows="1"
            value={question}
            onChange={handleQuestionChange}
          ></input>
        </div>
        <div>
          <label className="block mb-2">Choices:</label>
          {choices.map((choice, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                className="border border-gray-300 p-2 flex-grow mr-2"
                placeholder={`Choice ${index + 1}`}
                value={choice}
                onChange={(e) => handleChoiceChange(index, e)}
              />
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => handleRemoveChoice(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleAddChoice}
          >
            Add Choice
          </button>
        </div>
        <div>
          <label className="block mb-2">Correct Answer:</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full mb-4"
            value={correctAnswer}
            onChange={handleCorrectAnswerChange}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleSaveQuestion}
        >
          Save Question
        </button>
      </div>
    </div>
  );
};

export default QuizDashboard;
