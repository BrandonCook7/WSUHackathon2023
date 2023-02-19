import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../index.css"

function LandingPage() {
    const [ session, setSession ] = useState<any>({});
    useEffect(() => {   
        // Update the document title using the browser API    
        supabase.auth.getSession().then(s => {
            // console.log(s)
            setSession(s.data)
        })
        }, []);
        
    return (
        <div className="navbar">
            <Link to={"languages"}>
                <button>Home</button>
            </Link>
            <Link to={"languages"}>
                <button>Profile</button>
            </Link>
            <Link to={"login"}>
                <button>Login</button>
            </Link>

            {/* <h1>Welcome to the website</h1> */}
            <Outlet/>
        </div>
    )
}

export default LandingPage;
  