/// <reference types="vite/client" />

type QuestionFillData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
}

type QuestionCFData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
    code_snippet: string,
    language: string
  }
  