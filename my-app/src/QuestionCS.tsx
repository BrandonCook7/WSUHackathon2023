import React, { FC, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"
import './Question.css'
import style from './markdown-styles.module.css';

type Props = {
    CSData: CSData,
    handleInputFunction: any
}

function QuestionCS(data: Props) {



    const codeBlock1 = '```' + data.CSData.language + `\n` + data.CSData.code_snippet
    console.log(data.CSData.code_snippet)
    return (
        <div className="QuestionCS">
            <div>
                <h2>{data.CSData.question_prompt}</h2>
            </div>
            <div className="question-cs-box">
                {/* <ReactMarkdown children={codeBlock} remarkPlugins={[remarkGfm]}/> */}
                {/* <ReactMarkdown
                    remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                    className={style.reactMarkDown}
                    children={codeBlock1}
                /> */}
                <ReactMarkdown className="markdown"  remarkPlugins={[remarkGfm, remarkParse]}>
                    {codeBlock1}
                </ReactMarkdown>

            </div>
            <div className="RadioFillButton">
            {
                data.CSData.answers.map((s,i) => {
                    return (<label key={i}>
                         <button className="question-button" onClick={(e:any) => data.handleInputFunction(e, i)}>
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


