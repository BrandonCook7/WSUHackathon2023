import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { supabase } from "../supabaseClient";

function LandingPage() {
    const [ session, setSession ] = useState<any>({});
    useEffect(() => {   
        // Update the document title using the browser API    
        supabase.auth.getSession().then(s => {
            console.log(s)
            setSession(s.data)
        })

        //   const getSesssion = async () => {
        //     const userSession = await supabase.auth.getSession();
        //     userSession.data
        //     setSession(userSession.data)
        //   }
        //   getSesssion();
          console.log(session)
          supabase.auth.getUser().then(u => console.log(u))
        }, []);
        
    return (
        <div className="notapp">
            {/* <h1>Welcome to the website</h1> */}
            <Outlet/>
        </div>
    )
}

export default LandingPage;
  