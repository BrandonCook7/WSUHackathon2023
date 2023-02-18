import { useState } from "react";
import { useParams } from "react-router-dom";

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
                <>
                    <span>FIB</span>
                    {question.answers.map((answer, index) => {
                        return <button onClick={() => processAnswer(index)}>{answer}</button>
                    })}
                </>
            )
        } else if (question.type === "CS") {
            return (
                <>
                    <span>CS</span>
                    {question.answers.map((answer, index) => {
                        return <button onClick={() => processAnswer(index)}>{answer}</button>
                    })}
                </>
            )
        } else if (question.type === "MC") {
            return (
                <>
                    <span>MC</span>
                    {question.answers.map((answer, index) => {
                        return <button onClick={() => processAnswer(index)}>{answer}</button>
                    })}
                </>
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
  