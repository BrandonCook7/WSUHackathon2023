import React, { useState } from 'react'

function QuestionQuiz(data: QuestionQuizData) {

    return (
        <div className="QuestionQuiz">
            <h1>Choose the correct answer</h1>
            <div>
                <h2>{data.question_prompt}</h2>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        data.answers.map((s,i) => {
                            return (<label key={i}>
                                <button>
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