import { useState } from "react";

const TestingDashBoard = () => {
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
  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleRemoveChoice = (index) => {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    setChoices(updatedChoices);
  };

  const handleCorrectAnswer = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleSaveQuestion = () => {
    console.log(question);
    console.log(choices);
    console.log(correctAnswer);

    setQuestion("");
    setChoices([]);
    setCorrectAnswer("");
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Quiz DashBoard</h2>
        <div>
          <label className="block mb-2">Question:</label>
          <input
            type="text"
            placeholder="Enter Your Question"
            className="border border-gray-300 p-2 w-full mb-4"
            onChange={handleQuestionChange}
          />
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
            placeholder="Enter Your correct answer"
            className="border border-gray-300 p-2 w-full mb-4"
            onChange={handleCorrectAnswer}
          />
        </div>
        <div>
          <button
            onClick={handleSaveQuestion}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default TestingDashBoard;
