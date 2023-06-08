import Registration from "../Registration/Registration";
import registration from "../../assets/Mobile-login-Cristina.jpg";
import { useContext } from "react";
import { authContext } from "../../context/UserContext";
import QuizPage from "../quizPage/QuizPage";

const Header = () => {
  const { user } = useContext(authContext);

  return (
    <>
      <div className="w-[100%] max-w-full sm:max-w-md md:max-w-lg lg:max-w-[1280px] mx-auto p-4 h-auto">
        {/* If user is logged in, render the QuizPage */}
        <div>
          {user?.email ? (
            <QuizPage></QuizPage>
          ) : (
            /* If user is not logged in, render the registration form */
            <div className="w-full md:grid grid-cols-2 justify-center mt-12">
              {/* Image section */}
              <div className="hidden sm:block mx-auto">
                <img
                  src={registration}
                  alt=""
                  className="object-cover sm:w-[450px]"
                />
              </div>
              {/* Registration form section */}
              <div className="mx-auto">
                <Registration />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
