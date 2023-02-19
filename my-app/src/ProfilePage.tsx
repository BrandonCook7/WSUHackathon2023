import React, { useState } from 'react'


type ProfileData = {
    FirstName: string,
    LastName: string,
}

type CalcData = {
    Badges: Number[],
    CoursesCompleted: Number[],
}

function ProfilePage() {
    //Mock Data
    let tempCalcData: CalcData = {
        Badges: [2, 3],
        CoursesCompleted: [1],
    }

    let tempProfileData: ProfileData = {
        FirstName: "Brandon",
        LastName: "Cook",
    }

    return (
        <div className="QuestionQuiz">
            <h1>Hi {tempProfileData.FirstName}</h1>
            You have completed {tempCalcData.CoursesCompleted.length} courses.
            {/* <div>
                <h2>{data.quizData.question_prompt}</h2>
            </div>
            <form>
                <div className="RadioFillButton">
                    {
                        data.quizData.answers.map((s,i) => {
                            return (<label key={i}>
                                <button onClick={() => data.handleInputFunction(data.quizData.answer)}>
                                    {s}
                                </button>
                            </label>)
                        })
                    }
                </div>
            </form> */}
        </div>
    )
}

export default ProfilePage