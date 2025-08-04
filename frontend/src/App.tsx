import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { GlobalStyle } from "../GlobalStyle";

const Home = lazy(() => import("./pages/Home/Home"));
const CreateQuiz = lazy(() => import("./pages/CreateQuiz/CreateQuiz"));
const QuizList = lazy(() => import("./pages/QuizList/QuizList"));
const QuizDetails = lazy(() => import("./pages/QuizDetails/QuizDetails"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quizzes/:id" element={<QuizDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
