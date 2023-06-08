import { useContext } from "react";
import { authContext } from "../../context/UserContext";

const Registration = () => {
  const { registerUser, signInWithGoogle } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    registerUser(email, password)
      .then((result) => {
        console.log(result);
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  const handleSignWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-[100%] h-auto bg-blue-500 sm:w-[450px] p-4">
      {/*header section*/}
      <div className="text-center text-lg sm:text-2xl ">
        <h1 className="text-white font-extrabold p-4">Welcome To Quizify</h1>
      </div>
      {/*header section*/}
      <div className="w-[90%] sm:w-[350px] h-auto mx-auto">
        <h4 className="text-xl text-center text-white font-bold p-4">
          Register Here
        </h4>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center text-white"
        >
          <div className="mb-2">
            <label className="pr-[35px]">Name:</label>
            <input
              type="text"
              className="rounded text-black"
              name="name"
              required
            />
          </div>
          <div className="mb-2">
            <label className="pr-[40px]">Email:</label>
            <input
              type="email"
              className="rounded text-black"
              name="email"
              required
            />
          </div>
          <div className="mb-2">
            <label className="pr-[12px]">Password:</label>
            <input
              type="password"
              className="rounded text-black"
              name="password"
              required
            />
          </div>
          <div className="w-[80%] sm:w-[300px]">
            <button className="border w-full bg-purple-500 text-white font-bold rounded py-2 px-4 transition duration-300 hover:bg-purple-600">
              Register
            </button>
          </div>
        </form>
        <div className="w-full text-center mx-auto">
          <h2 className="text-white">Or</h2>
          <div className="w-[80%] sm:w-[300px] mx-auto">
            <button
              onClick={handleSignWithGoogle}
              className="border w-full bg-purple-500 text-white font-bold rounded py-2 px-4 transition duration-300 hover:bg-purple-600"
            >
              Register With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
