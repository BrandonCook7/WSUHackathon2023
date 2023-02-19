import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './ProfilePage.css'

type ProfileData = {
    FirstName: string,
    LastName: string,
    UserID: string,
}

type CalcData = {
    Badges: Number[],
    CoursesCompleted: Number[],
}

function hexToDec(s) {
    var i, j, digits = [0], carry;
    for (i = 0; i < s.length; i += 1) {
        carry = parseInt(s.charAt(i), 16);
        for (j = 0; j < digits.length; j += 1) {
            digits[j] = digits[j] * 16 + carry;
            carry = digits[j] / 10 | 0;
            digits[j] %= 10;
        }
        while (carry > 0) {
            digits.push(carry % 10);
            carry = carry / 10 | 0;
        }
    }
    return digits.reverse().join('');
}

function FindAvatar(UserID: string) {
    UserID = UserID.replace(/-/g, '');
    UserID = UserID.slice(UserID.length / 2, UserID.length)
    console.log(UserID)
    var decimal = hexToDec(UserID)
    var value = Math.floor(Number(decimal) / 9999999999999999)
    console.log(value)
    console.log(value%6)
    switch (value%6) {
        case 0:
            return "https://cdn-icons-png.flaticon.com/512/3940/3940403.png" //Bear Avatar
        case 1:
            return "https://cdn-icons-png.flaticon.com/512/3940/3940417.png" //Rabbit Avatar
        case 2:
            return "https://cdn-icons-png.flaticon.com/512/4322/4322992.png" //Fox Avatar
        case 3:
            return "https://cdn-icons-png.flaticon.com/512/1326/1326377.png" //Panda Avatar
        case 4:
            return "https://cdn-icons-png.flaticon.com/512/1326/1326405.png" //Chicken Avatar
        case 5:
            return "https://cdn-icons-png.flaticon.com/512/1326/1326415.png" //Seal Avatar
    }
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
        UserID: "65d380cf-9949-4c39-82c3-93f3a44c6221",
    }
    let avatar = FindAvatar(tempProfileData.UserID)
    return (
        <div>
            <div className="QuestionQuiz">
                <h1>Hi {tempProfileData.FirstName}</h1>
                You have completed {tempCalcData.CoursesCompleted.length} courses.
            </div>
            <div className="element">
                <img src={avatar} width="150" height="150"></img>
            </div>
        </div>
    )
}

export default ProfilePage