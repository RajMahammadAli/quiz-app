import { useEffect, useState } from "react";

const DisplayData = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1>Hello word</h1>
      <h2>{users.length}</h2>
      <div className="grid grid-cols-3 gap-2 justify-center items-center border">
        {users.map((user, index) => (
          <div key={index} className="border p-2 m-1 bg-green-100">
            <p>Q.N: {index + 1}</p>
            <h2>question: {user.question}</h2>
            <h3>
              Choices:{" "}
              {user.choices.map((choice, index) => (
                <div key={index}>
                  <li>{choice}</li>
                </div>
              ))}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
