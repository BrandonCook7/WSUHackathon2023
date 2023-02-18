import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './QuestionCS.css'

function QuestionCS(data: QuestionCSData) {
    const codeBlock = '```Python\n' + data.code_snippet + '```'

    return (
        <div className="QuestionCS">
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