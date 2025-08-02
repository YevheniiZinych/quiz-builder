import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import type { IQuiz } from "../../pages/QuizList/QuizList";
import { Link, Title, Item } from "./QuizItem.styled.js";

interface IQuizItemData {
  quiz: IQuiz;
  index: number;
  deleteQuiz: (id: number) => void;
}

export const QuizItem = ({ quiz, index, deleteQuiz }: IQuizItemData) => {
  const location = useLocation();

  return (
    <Item key={index}>
      <Link to={`${quiz.id}`} state={{ from: location }}>
        <Title>{quiz.title}</Title>
        <span>Number of quizzes: {quiz.questionsCount}</span>
      </Link>
      <IconButton aria-label="delete" sx={{ color: "red" }} onClick={() => deleteQuiz(quiz.id)}>
        <DeleteIcon />
      </IconButton>
    </Item>
  );
};
