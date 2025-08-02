import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { getQuiz } from "../../api/quizApi";
import { QuizItem } from "../../components/QuizItem/QuizItem";
import { removeQuiz } from "../../api/quizApi";

export interface IQuiz {
  id: number;
  title: string;
  questionsCount: number;
}

const QuizList = () => {
  const [quiz, setQuiz] = useState<IQuiz[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const result = await getQuiz(setMessage);

      setQuiz(result);
    })();
  }, []);

  const deleteQuiz = async (id: number) => {
    const result = await removeQuiz(id, setMessage);

    if (result) {
      await toast.success("Quiz was deleted");

      const filteredQuizList = await quiz?.filter((q) => q.id !== id);

      setQuiz(filteredQuizList);
    } else {
      await toast.error(`${result}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, textAlign: "center" }}>
      <Typography variant="h4" mb={2}>
        Quiz list
      </Typography>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {quiz?.map((q, index) => (
            <>
              <QuizItem key={index} quiz={q} index={index} deleteQuiz={deleteQuiz} />
            </>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default QuizList;
