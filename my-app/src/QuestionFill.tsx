import { useState } from 'react'


type Props = {
    question_prompt: string,
    answers: string[],
    answer: Number,

}

function QuestionFill(p: Props) {

    return (
        <div className="QuestionFill">
            <h1>Fill in the blanks</h1>
            <div>
                <h2>{p.question_prompt}</h2>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        p.answers.map((s,i) => {
                            return (<label>
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

export default QuestionFill