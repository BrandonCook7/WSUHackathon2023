import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../index.css"

function generateLoginLogoutButton(session:any) {
    console.log("eeeeee")
    console.log(session)
    if (session === undefined || session === null) {
        return (
            <Link to={"login"}>
                <button className="navbar-buttons navbar-button-login">Login</button>
            </Link>
        )
    }
    else {
        return (
            // TODO: in order for the logout button to swtich for the login button you need to do a page redirect on this to refresh state.
            <Link to={"languages"}>
                <button className="navbar-buttons navbar-button-login" onClick={(e:any) => {supabase.auth.signOut()}}>Logout</button>
            </Link>
        )
    }
}

function LandingPage() {
    const [ session, setSession ] = useState<any>({});
    useEffect(() => {   
        // Update the document title using the browser API    
        supabase.auth.getSession().then((s:any) => {    
            console.log(s)
            // console.log(s)
            setSession(s.data.session)
        })
        }, []);
        
    return (
        <div className="navbar">
            <Link to={"languages"}>
                <button className="navbar-buttons navbar-button-home">Home</button>
            </Link>
            <Link to={"Profile"}>
                <button className="navbar-buttons navbar-button-profile">Profile</button>
            </Link>
            {/* <Link to={"login"}>
                <button className="navbar-buttons navbar-button-login">Login</button>
            </Link> */}
            {/* <Link to={"languages"}>
                <button className="navbar-buttons navbar-button-login" onClick={() => supabase.auth.signOut()}>logout</button>
            </Link> */}
            {generateLoginLogoutButton(session)}
            {/* <h1>Welcome to the website</h1> */}
            <Outlet/>
        </div>
    )
}

export default LandingPage;
  