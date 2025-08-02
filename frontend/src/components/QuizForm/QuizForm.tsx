import { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
import type { IQuestionForm } from "../../types/types";
import { createQuiz } from "../../api/quizApi";

const initialQuestion: IQuestionForm = {
  type: "boolean",
  question: "",
  options: [],
  answer: [],
};

export const QuizForm = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  console.log(submitMessage);

  const handleSubmit = async (
    values: { title: string; questions: (typeof initialQuestion)[] },
    { resetForm }: { resetForm: () => void }
  ) => {
    const quiz = await createQuiz(values, setSubmitMessage);

    if (quiz) {
      await toast.success("Quiz created");
    } else {
      await toast.error(submitMessage);
    }

    resetForm();
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={2}>
        Create Quiz
      </Typography>
      <Formik
        initialValues={{
          title: "",
          questions: [{ ...initialQuestion }],
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Box mb={2}>
              <TextField
                fullWidth
                required
                label="Quiz Title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </Box>
            <FieldArray name="questions">
              {({ push, remove }) => (
                <div>
                  {values.questions.map((q, idx) => (
                    <Box key={idx} sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, mb: 2 }}>
                      <TextField
                        fullWidth
                        required
                        label={`Question #${idx + 1} text`}
                        name={`questions.${idx}.question`}
                        value={q.question}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        select
                        label="Type"
                        name={`questions.${idx}.type`}
                        value={q.type}
                        onChange={(e) => {
                          setFieldValue(`questions.${idx}.type`, e.target.value);
                          setFieldValue(`questions.${idx}.options`, []);
                          setFieldValue(`questions.${idx}.answer`, []);
                        }}
                        sx={{ mb: 2, minWidth: 120 }}
                      >
                        <MenuItem value="boolean">Boolean</MenuItem>
                        <MenuItem value="input">Input</MenuItem>
                        <MenuItem value="checkbox">Checkbox</MenuItem>
                      </TextField>

                      {q.type === "boolean" && (
                        <Box>
                          <Button
                            variant={q.answer[0] === "true" ? "contained" : "outlined"}
                            onClick={() => setFieldValue(`questions.${idx}.answer`, ["true"])}
                            sx={{ mr: 1 }}
                          >
                            True
                          </Button>
                          <Button
                            variant={q.answer[0] === "false" ? "contained" : "outlined"}
                            onClick={() => setFieldValue(`questions.${idx}.answer`, ["false"])}
                          >
                            False
                          </Button>
                        </Box>
                      )}

                      {q.type === "input" && (
                        <TextField
                          fullWidth
                          label="Correct Answer"
                          name={`questions.${idx}.answer[0]`}
                          value={q.answer[0] || ""}
                          onChange={handleChange}
                          sx={{ mt: 2 }}
                        />
                      )}

                      {q.type === "checkbox" && (
                        <FieldArray name={`questions.${idx}.options`}>
                          {({ push: pushOption, remove: removeOption }) => (
                            <Box>
                              <Typography sx={{ mt: 2 }}>Options:</Typography>
                              {(q.options || []).map((opt, optIdx) => (
                                <Box key={optIdx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                  <TextField
                                    size="small"
                                    name={`questions.${idx}.options.${optIdx}`}
                                    value={opt}
                                    onChange={handleChange}
                                    placeholder={`Option #${optIdx + 1}`}
                                    sx={{ mr: 1 }}
                                  />
                                  <input
                                    type="checkbox"
                                    checked={q.answer.includes(opt)}
                                    onChange={(e) => {
                                      let answers = [...q.answer];
                                      if (e.target.checked) {
                                        answers.push(opt);
                                      } else {
                                        answers = answers.filter((ans) => ans !== opt);
                                      }
                                      setFieldValue(`questions.${idx}.answer`, answers);
                                    }}
                                  />
                                  <Button
                                    variant="text"
                                    color="error"
                                    onClick={() => removeOption(optIdx)}
                                    sx={{ ml: 1, minWidth: 0 }}
                                  >
                                    X
                                  </Button>
                                </Box>
                              ))}
                              <Button
                                variant="outlined"
                                size="small"
                                onClick={() => pushOption("")}
                                sx={{ mt: 1 }}
                              >
                                + Add option
                              </Button>
                            </Box>
                          )}
                        </FieldArray>
                      )}

                      {values.questions.length > 1 && (
                        <Button color="error" variant="outlined" onClick={() => remove(idx)} sx={{ mt: 2 }}>
                          Delete Question
                        </Button>
                      )}
                    </Box>
                  ))}
                  <Button
                    variant="outlined"
                    onClick={() => push({ type: "boolean", question: "", options: [], answer: [] })}
                  >
                    + Add question
                  </Button>
                </div>
              )}
            </FieldArray>
            <Button variant="contained" type="submit" sx={{ mt: 3 }}>
              Create Quiz
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
