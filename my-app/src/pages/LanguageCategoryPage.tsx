import { useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCS from "../QuestionCS";
import QuestionFill from "../QuestionFill";
import QuestionQuiz from "../QuestionQuiz";

function LanguageCategoryPage() {
    const [ questions, setQuestions ] = useState([
        {
            type: "FIB",
            questionPrompt: "What is the ___ in Python",
            answers: [
                "Word 1",
                "Word 2",
                "Word 3",
                "Word 4"
            ],
            correctAnswer: 1
        },
        {
            type: "CS",
            questionPrompt: "Here is a code snippet",
            answers: [
                "Word 1",
                "Word 2",
                "Word 3",
                "Word 4"
            ],
            correctAnswer: 3
        },
        {
            type: "MC",
            questionPrompt: "What is Python?",
            answers: [
                "Word 1",
                "Word 2",
                "Word 3",
                "Word 4"
            ],
            correctAnswer: 0
        }
    ]);

    let params = useParams();
    console.log(params); // "hotspur"

    const [ questionIndex, setQuestionIndex ] = useState(0);

    function processAnswer(index: number) {
        if(index === questions[questionIndex].correctAnswer) {
            setQuestionIndex(questionIndex + 1);
            if(index === questions.length) {
                console.log("YOU WIN YOU WIN");
            }
        }
    }

    function questionComponent() {
        let question = questions[questionIndex];
        console.log(question);
        if (question.type === "FIB") {
            return (
                <QuestionFill 
                    fillData={
                        {
                            question_prompt:question.questionPrompt,
                            answer: question.correctAnswer,
                            answers: question.answers
                        }
                    } 
                    handleInputFunction={processAnswer} 
                />
            )
        } else if (question.type === "CS") {
            return (
                <QuestionCS 
                    CSData={
                        {
                            question_prompt:question.questionPrompt,
                            answer: question.correctAnswer,
                            answers: question.answers,
                            code_snippet: "",
                            language: ""
                        }
                    } 
                    handleInputFunction={processAnswer} 
                />
                )
        } else if (question.type === "MC") {
            return (
                <QuestionQuiz 
                    quizData={
                        {
                            question_prompt:question.questionPrompt,
                            answer: question.correctAnswer,
                            answers: question.answers
                        }
                    } 
                    handleInputFunction={processAnswer} 
                />
            )
        }
    }

    return (
        <div className="App">
            <h1>Category {params.category} for Python</h1>
            <h1>The website for {params.language}</h1>
            {questionComponent()}
        </div>
    )
}

export default LanguageCategoryPage;
  