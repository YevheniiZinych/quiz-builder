import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Typography,
  Box,
  CircularProgress,
  Paper,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  FormGroup,
  Checkbox,
} from "@mui/material";
import toast from "react-hot-toast";
import { BackLink } from "../../components/BackLink/BackLink";
import { getQuizById } from "../../api/quizApi";

type QuestionType = "boolean" | "input" | "checkbox";

interface Question {
  type: QuestionType;
  question: string;
  options?: string[];
  answer: string[];
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

const QuizDetails = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/quizzes";

  useEffect(() => {
    (async () => {
      const quiz = await getQuizById(id, setMessage);

      if (quiz) {
        setLoading(false);
        toast.success("Your quiz");
      } else {
        toast.error(`${message}`);
      }

      setQuiz(quiz);
    })();
  }, [id, message]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (!quiz)
    return (
      <Typography mt={4} align="center" color="error">
        Quiz not found
      </Typography>
    );

  return (
    <main>
      <BackLink to={backLinkHref}>Back to list</BackLink>
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, textAlign: "center" }}>
        <Typography variant="h4" mb={3}>
          {quiz.title}
        </Typography>
        {quiz.questions.map((q, idx) => (
          <Paper key={idx} sx={{ p: 3, mb: 3 }}>
            <Typography fontWeight={500} mb={2}>
              {idx + 1}. {q.question}
            </Typography>

            {q.type === "boolean" && (
              <FormControl component="fieldset" disabled>
                <RadioGroup row value={q.answer[0]}>
                  <FormControlLabel value="true" control={<Radio />} label="True" />
                  <FormControlLabel value="false" control={<Radio />} label="False" />
                </RadioGroup>
              </FormControl>
            )}

            {q.type === "input" && (
              <TextField
                label="Correct answer"
                value={q.answer[0] || ""}
                InputProps={{ readOnly: true }}
                sx={{ mt: 1, minWidth: 200 }}
                variant="outlined"
                disabled
              />
            )}

            {q.type === "checkbox" && (
              <FormGroup>
                {(q.options || []).map((opt, i) => (
                  <FormControlLabel
                    key={i}
                    control={<Checkbox checked={q.answer.includes(opt)} disabled />}
                    label={opt}
                  />
                ))}
              </FormGroup>
            )}
          </Paper>
        ))}
      </Box>
    </main>
  );
};

export default QuizDetails;
