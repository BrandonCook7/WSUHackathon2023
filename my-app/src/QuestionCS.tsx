import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './Question.css'

function QuestionCS(data: CSData) {
    const codeBlock = '```Python\n' + data.code_snippet + '```'

    return (
        <div className="QuestionCS">
            <div>
                <h2>{data.question_prompt}</h2>
            </div>
            <div className='left'>
                {/* <ReactMarkdown children={codeBlock} remarkPlugins={[remarkGfm]}/> */}
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                {codeBlock}
                </ReactMarkdown>
            </div>
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
        </div>
      )
}

export default QuestionCS