import { useContext } from "react";
import { authContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Blue Modern Education Logo (1).png";

const Navbar = () => {
  const { user, userSignIn, userSignOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/quizpage");
      })
      .catch((err) => console.error(err));
  };

  const handleSignOut = () => {
    console.log("signOut");
    userSignOut()
      .then(() => {
        alert("user sign Out");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <section className="w-[100%] max-w-full sm:max-w-md md:max-w-lg lg:max-w-[1280px] mx-auto p-4 py-0 bg-blue-500 h-auto">
        <div className="w-[100%] md:flex justify-between items-end">
          {/*logo section*/}
          <div>
            <img className="w-[100px] object-cover" src={logo} alt="" />
          </div>
          {/*logo section*/}

          <div>
            {user?.email ? (
              <div className="flex justify-center items-center p-2">
                <div className="px-4 text-white border">
                  <h2>{user?.email && <p>{user?.email}</p>}</h2>
                </div>
                <div className="mx-2">
                  <button
                    onClick={handleSignOut}
                    className="w-[150px] bg-purple-500 text-white font-bold rounded-lg py-2 px-4 transition duration-300 hover:bg-purple-600"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              //form section
              <form onSubmit={handleSubmit}>
                <div className="w-[100%] md:flex text-xm text-white">
                  <div className="sm:flex justify-center items-center px-1">
                    <div>
                      <label className="px-1">Email:</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="email"
                        alt=""
                        className="rounded text-black w-[60%] md:w-[250px] py-2"
                      />
                    </div>
                  </div>
                  <div className="sm:flex justify-center items-center px-1">
                    <div>
                      <label className="px-1">Password:</label>
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        alt=""
                        className="rounded text-black w-[60%] md:w-[250px] py-2"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <button className="w-[150px] bg-purple-500 text-white font-bold rounded-lg py-2 px-4 transition duration-300 hover:bg-purple-600">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
          {/*form section*/}
        </div>
      </section>
    </>
  );
};

export default Navbar;
