import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import QuizPage from "./components/quizPage/QuizPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Header /> },
    { path: "/quizPage", element: <QuizPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
