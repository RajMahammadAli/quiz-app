import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import QuizPage from "./components/quizPage/QuizPage";
import Main from "./layout/Main";
import Header from "./components/Header/Header";
import PrivateRoutes from "./routes/PrivateRoutes";
import QuizDashboard from "./QuizDashboard";
import TestingDashBoard from "./TestingDashBoard";
import DisplayData from "./DisplayData";
import NewDisplayData from "./components/quizPage/NewDisplayData";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Header /> },
        { path: "/dashboard", element: <QuizDashboard></QuizDashboard> },
        { path: "/displayData", element: <DisplayData></DisplayData> },
        { path: "/newdisplayData", element: <NewDisplayData></NewDisplayData> },
        { path: "/scoreboard", element: <ScoreBoard></ScoreBoard> },

        {
          path: "/testingDashboard",
          element: <TestingDashBoard></TestingDashBoard>,
        },

        {
          path: "/quizPage",
          element: (
            <PrivateRoutes>
              <QuizPage></QuizPage>
            </PrivateRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
