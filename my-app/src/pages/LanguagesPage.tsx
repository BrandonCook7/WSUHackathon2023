import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function LanguagesPage() {
    const [ languages, setLanguages ] = useState<any[]>([]);

    let params = useParams();
    useEffect( () => {
        async function getLanguages() {
            const {data, error} = await supabase
                .from("programming_language")
                .select("*")

            if (error) {
                console.log(error);
            } else {
                setLanguages(data);
            }
        }
        getLanguages();
    }, []);

    return (
        <div className="App">
            <h1 className="language-box rainbow">Learn A New Programming Language</h1>
            {languages.map((language) => {
                const name = language.language_name;
                return (
                    <Link to={"/languages/" + language.language_id} key={name}>
                        <button className="language-button">
                            {name}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

export default LanguagesPage;
  