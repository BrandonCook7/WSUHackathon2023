/// <reference types="vite/client" />

type QuestionFillData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
}

type QuestionCSData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
    code_snippet: string,
    language: string
  }
  
type QuestionQuizData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
}