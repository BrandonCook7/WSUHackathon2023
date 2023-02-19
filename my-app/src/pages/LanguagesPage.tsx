import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function LanguagesPage() {
    const [ languages, setLanguages ] = useState<any[]>([]);

    let params = useParams();
    console.log(params); // "hotspur"
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
  