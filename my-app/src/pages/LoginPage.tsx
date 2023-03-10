import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { supabase } from "../supabaseClient";
import "../App.css";

function LoginPage() {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
        if(event === "SIGNED_IN") {
            window.location.replace("http://localhost:5173/languages");
        }
    });

    function logOut() {
        supabase.auth.signOut();
    }

    return (
        <div className="App">
            <Auth 
                supabaseClient={supabase} 
                appearance={{ theme: ThemeSupa }}
            />
            <button onClick={() => logOut()}>
                Sign Out
            </button>
        </div>
    )
}

export default LoginPage;
