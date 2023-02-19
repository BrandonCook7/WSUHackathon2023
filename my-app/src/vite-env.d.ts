/// <reference types="vite/client" />

type FillData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
}

type CSData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
    code_snippet: string,
    language: string
  }
  
type QuizData = {
    question_prompt: string,
    answers: string[],
    answer: Number,
}

type Question = {
    questionPrompt: string,
    answers: string[],
    correctAnswer: number,
    type: string
}

type CodeSnippetQuestion = {

}