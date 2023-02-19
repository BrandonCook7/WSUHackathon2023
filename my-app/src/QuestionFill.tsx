import { useState } from 'react'


type Props = {
    fillData: FillData,
    handleInputFunction: any
}

function QuestionFill(p: Props) {

    return (
        <div className="QuestionFill">
            <h1>Fill in the blanks</h1>
            <div>
                <h2>{p.fillData.question_prompt}</h2>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        p.fillData.answers.map((s,i) => {
                            return (<label key={i}>
                                <button onClick={() => p.handleInputFunction(p.fillData.answer)}>
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