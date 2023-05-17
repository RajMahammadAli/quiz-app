const Registration = () => {
  return (
    <div className="w-full h-full bg-blue-400">
      <div className="text-center">
        <h1 className="text-2xl text-white font-extrabold p-4">
          Welcome To Quiz App
        </h1>
      </div>
      <div className="w-[350px] h-[250px] mx-auto">
        <h4 className="text-xl text-center text-white font-bold p-4">
          Register Here
        </h4>
        <form className="p-4 flex flex-col items-center">
          <div className="m-2">
            <label className="pr-[35px]">Name:</label>
            <input type="text" className="rounded" required />
          </div>
          <div className="m-2">
            <label className="pr-[40px]">Email:</label>
            <input type="text" className="rounded" required />
          </div>
          <div className="m-2">
            <label className="pr-[12px]">Password:</label>
            <input type="password" className="rounded" required />
          </div>
          <div className="w-[300px] p-4">
            <button className="border w-full bg-white text-blue-500 font-bold rounded">
              Register
            </button>
          </div>
        </form>
        <div className="w-full text-center mx-auto">
          <h2>Or Register With</h2>
          <div className="w-[300px] p-4 mx-auto">
            <button className="border w-full bg-white text-blue-500 font-bold rounded">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
