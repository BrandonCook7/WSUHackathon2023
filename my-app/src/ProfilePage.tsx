import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toString from 'stream-to-string'
import './ProfilePage.css'
import { supabase } from './supabaseClient';


type CalcData = {
    Badges: Number[],
    CoursesCompleted: Number[],
}

function hexToDec(s:any) {
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
    var decimal = hexToDec(UserID)
    var value = Math.floor(Number(decimal) / 9999999999999999)
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
    const [ badges, setBadges ] = useState<any[]>([]);
    const [ user, setUser ] = useState<any>();

    useEffect( () => {
        async function getBadges(user: any) {
            fetch(`http://localhost:8001/get_badges/${user.id}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    setBadges(data.res);
                })
        }
        supabase.auth.getUser().then((u:any) => {
            setUser(u.data.user);
            getBadges(u.data.user);
        })
    }, []);

    let badge_loaded = JSON.parse(badges)
    //Mock Data
    let tempCalcData: CalcData = {
        Badges: [2, 3],
        CoursesCompleted: [1],
    }

    let avatar = FindAvatar(user?.id || "efsees")
    return (
        <div>
            <div className="QuestionQuiz">
                <h1>Hi {user?.email.split('.')[0].charAt(0).toUpperCase() + user?.email.split('.')[0].slice(1)}</h1>
                You have completed {badges?.length} courses.
            </div>
            <div className="element">
                <img src={avatar} width="150" height="150"></img>
            </div>
            {badge_loaded.map(image, name) => {
                <img className="badge-image" src={image}></img>
                <h1 className="badge-name">name</h1>
            }}
        </div>
    )
}

export default ProfilePage