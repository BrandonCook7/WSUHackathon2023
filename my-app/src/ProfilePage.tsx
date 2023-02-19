import React, { useState } from 'react'


type ProfileData = {
    FirstName: string,
    LastName: string,
    UserID: string,
}

type CalcData = {
    Badges: Number[],
    CoursesCompleted: Number[],
}

function FindAvatar(UserID: string) {
    return "https://cdn-icons-png.flaticon.com/512/3940/3940403.png"
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
        UserID: "f4bb1eb9-0b91-45ea-8e7f-0b43c5cc115c",
    }
    let avatar = FindAvatar(tempProfileData.UserID)
    return (
        <div className="QuestionQuiz">
            <h1>Hi {tempProfileData.FirstName}</h1>
            <img src={avatar} width="100" height="100"></img>
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