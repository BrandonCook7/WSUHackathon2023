import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './Question.css'

type Props = {
    CSData: CSData,
    handleInputFunction: any
}

function QuestionCS(data: Props) {
    const codeBlock = '```Python\n' + data.CSData.code_snippet + '```'

    return (
        <div className="QuestionCS">
            <div>
                <h2>{data.CSData.question_prompt}</h2>
            </div>
            <div className='left'>
                {/* <ReactMarkdown children={codeBlock} remarkPlugins={[remarkGfm]}/> */}
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                {codeBlock}
                </ReactMarkdown>
            </div>
            <div className="RadioFillButton">
            {
                data.CSData.answers.map((s,i) => {
                    return (<label key={i}>
                        <button onClick={() => data.handleInputFunction(data.CSData.answer)}>
                            {s}
                        </button>
                    </label>)
                })
            }
            </div>
        </div>
      )
}

export default QuestionCS