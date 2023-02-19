import React, { useState } from 'react'

type Props = {
    quizData: QuizData,
    handleInputFunction: any
}

function QuestionQuiz(data: Props) {

    return (
        <div className="QuestionQuiz">
            <h2>Choose the correct answer</h2>
            <div>
                <h1 className="question-box">{data.quizData.question_prompt}</h1>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        data.quizData.answers.map((s,i) => {
                            return (<label key={i}>
                                <button className="question-button" onClick={() => data.handleInputFunction(data.quizData.answer)}>
                                    {s}
                                </button>
                            </label>)
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default QuestionQuiz