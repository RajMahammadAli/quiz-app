import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  // firebase sign up

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userEmail = auth.currentUser.email;
      console.log(auth.currentUser.email);
      {
        !userEmail == null ? navigate("/quizApp") : navigate("/quizPage");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("this is from register", name, email, password);
  };

  return (
    <div className="w-full h-full bg-blue-500">
      <div className="text-center">
        <h1 className="text-2xl text-white font-extrabold p-4">
          Welcome To Quiz App
        </h1>
      </div>
      <div className="w-[350px] h-[250px] mx-auto">
        <h4 className="text-xl text-center text-white font-bold p-4">
          Register Here
        </h4>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center text-white"
        >
          <div className="m-2">
            <label className="pr-[35px]">Name:</label>
            <input
              type="text"
              className="rounded text-black"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="m-2">
            <label className="pr-[40px]">Email:</label>
            <input
              type="email"
              className="rounded text-black"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="m-2">
            <label className="pr-[12px]">Password:</label>
            <input
              type="password"
              className="rounded text-black"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
          </div>
          <div className="w-[300px]">
            <button
              onClick={handleRegister}
              className="border w-full bg-white text-blue-500 font-bold rounded"
            >
              Register
            </button>
          </div>
        </form>
        <div className="w-full text-center mx-auto">
          <h2 className="text-white">Or</h2>
          <div className="w-[300px] mx-auto">
            <button className="border w-full bg-white text-blue-500 font-bold rounded">
              Register With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
