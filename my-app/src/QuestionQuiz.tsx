import React, { useState } from 'react'

type Props = {
    quizData: QuizData,
    handleInputFunction: any
}

function QuestionQuiz(data: Props) {

    return (
        <div className="QuestionQuiz">
            <h1>Choose the correct answer</h1>
            <div>
                <h2>{data.quizData.question_prompt}</h2>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        data.quizData.answers.map((s,i) => {
                            return (<label key={i}>
                                <button onClick={(e:any) => data.handleInputFunction(e, data.quizData.answer)}>
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