export type QuestionType = "boolean" | "input" | "checkbox";

export interface IQuestionForm {
  type: QuestionType;
  question: string;
  options: string[];
  answer: string[];
}
