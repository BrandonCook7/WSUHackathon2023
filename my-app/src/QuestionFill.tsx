import { useState } from 'react'


type Props = {
    fillData: FillData,
    handleInputFunction: any
}

function QuestionFill(p: Props) {

    return (
        <div className="QuestionFill">
            <h2>Fill in the blanks</h2>
            <div>
                <h1 className="question-box">{p.fillData.question_prompt}</h1>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        p.fillData.answers.map((s,i) => {
                            return (<label key={i}>
                                <button className="question-button" onClick={() => p.handleInputFunction(p.fillData.answer)}>
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