import axios from "axios";
import type { IQuestionForm } from "../types/types";
import { errorHandler } from "../utils/errorHandler";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

interface IQuizForm {
  title: string;
  questions: IQuestionForm[];
}

export const createQuiz = async (
  data: IQuizForm,
  setSubmitMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const result = await axios.post("/quizzes", data);

    return result.data;
  } catch (error) {
    errorHandler(error, setSubmitMessage);
  }
};

export const getQuiz = async (setMessage: React.Dispatch<React.SetStateAction<string>>) => {
  try {
    const result = await axios.get("/quizzes");

    return result.data;
  } catch (error) {
    errorHandler(error, setMessage);
  }
};

export const removeQuiz = async (
  id: number | undefined,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const result = await axios.delete(`/quizzes/${id}`);

    return result.data;
  } catch (error) {
    errorHandler(error, setMessage);
  }
};

export const getQuizById = async (
  id: string | undefined,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const result = await axios.get(`/quizzes/${id}`);

    return result.data;
  } catch (error) {
    errorHandler(error, setMessage);
  }
};
