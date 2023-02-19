import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function LanguagesPage() {
    const [ languages, setLanguages ] = useState<any[]>([]);
    const [ languageMap, setLanguageMap ] = useState<any[]>([]);

    const [ session, setSession ] = useState<any>({});

    useEffect(() => {   
        // Update the document title using the browser API    
          const getSesssion = async () => {
            setSession(await supabase.auth.getSession())
          }
          getSesssion();
          console.log(session)
        }, []);

    let params = useParams();
    useEffect( () => {
        async function getLanguages() {
            const {data, error} = await supabase
                .from("programming_language")
                .select("*")

            if (error) {
                console.log(error);
            } else {
                console.log("HERE");
                console.log(data);
                setLanguages(data);
            }
        }
        getLanguages();
    }, []);

    useEffect( () => {
        async function getLanguageMapForUser() {
            const {data, error} = await supabase
                .from("has_completed")
                .select("*")
                .eq("user_id", session.user.user_id)

            if (error) {
                console.log(error);
            } else {
                console.log("HERE");
                console.log(data);
                setLanguageMap(data);
            }
        }
        getLanguageMapForUser();
    }, []);

    return (
        <div className="App">
            <h1>Learn A New Programming Language</h1>
            {languages.map((language) => {
                const name = language.language_name;
                return (
                    <Link to={"/languages/" + language.language_name} key={name}>
                        <button>
                            {name}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

export default LanguagesPage;
  